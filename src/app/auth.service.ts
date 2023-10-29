import { Injectable }                                      from '@angular/core';
import { HttpClient }                                      from '@angular/common/http';
import { BehaviorSubject, lastValueFrom, Observable, tap } from 'rxjs';

import { environment }           from '../environments/environment';
import { IResponseUser }         from './modules/users/interfaces/response-user.interface';
import { defaultRequestOptions } from './shared/utils/request.utils';
import { DatabaseService }       from './services/database.service';
import { CryptoService }         from './services/crypto.service';
import { IApi }                  from './shared/interfaces/api.interface';
import { Router }                from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userSubject = new BehaviorSubject<IResponseUser | null>(null);
  private readonly baseUrl = environment.authentication.baseUrl;

  constructor(
    private readonly http: HttpClient,
    private dbService: DatabaseService,
    private cryptoService: CryptoService,
    private router: Router
  ) {
  }

  async getUserInfo(refresh: boolean): Promise<IResponseUser> {
    if (refresh) {
      const userInfo = (await lastValueFrom(this.http.get<IApi<IResponseUser>>(`${ this.baseUrl }/auth/me`))).content as IResponseUser;
      this.userSubject.next(userInfo);
      await this.dbService.saveUserInfo(this.cryptoService.encrypt(userInfo));
      return userInfo;
    } else {
      const userInfo = this.cryptoService.decrypt(await this.dbService.getUserInfo());
      if (userInfo) {
        this.userSubject.next(userInfo);
        return userInfo;
      } else {
        const userInfo = (await lastValueFrom(this.http.get<IApi<IResponseUser>>(`${ this.baseUrl }/auth/me`))).content as IResponseUser;
        this.userSubject.next(userInfo);
        await this.dbService.saveUserInfo(this.cryptoService.encrypt(userInfo));
        return userInfo;
      }
    }
  }

  signIn(email: string, password: string): Observable<any> {
    const options = {...defaultRequestOptions, observe: 'response'};
    return this.http.post(`${ this.baseUrl }/auth/sign-in`, {emailOrUsername: email, password}, options as any)
      .pipe(
        tap((res: any) => {
          const token = res.body?.accessToken;
          if (token) {
            localStorage.setItem('token', token);
            this.getUserInfo(true).then();
          }
        })
      );
  }

  refreshToken() {
    const options = {...defaultRequestOptions};
    return this.http.post(`${ this.baseUrl }/auth/refresh-access`, {}, options as any)
      .pipe(
        tap((res: any) => {
          const token = res.body?.accessToken;
          if (token) {
            localStorage.setItem('token', token);
            this.getUserInfo(true).then();
          }
        })
      );
  }

  checkUsersToken(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    lastValueFrom(this.http.post(`${ this.baseUrl }/auth/sign-out`, {}, defaultRequestOptions as any))
      .finally(() => {
        this.dbService.removeUserInfo().then();
        localStorage.removeItem('token');
        this.userSubject.next(null);
        this.router.navigate([ '/authentication/sign-in' ]).then(() => window.location.reload());
      });
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');

    if (!token) return true;

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    const expirationDate = new Date(payload.exp * 1000);
    const currentDate = new Date();
    console.log(expirationDate);

    return expirationDate < currentDate;
  }
}
