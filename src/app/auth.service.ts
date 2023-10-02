import { Injectable }                  from '@angular/core';
import { HttpClient }                  from '@angular/common/http';
import { IResponseUser }                    from './modules/users/interfaces/response-user.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment }                      from '../environments/environment';
import { defaultRequestOptions }       from './shared/utils/request.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.authentication.baseUrl;
  private userSubject = new BehaviorSubject<IResponseUser | null>(null);

  constructor(private readonly http: HttpClient) { }

  me(): void {
    this.http.get<IResponseUser>(`${ this.baseUrl }/me`).subscribe((user) => {
      this.userSubject.next(user);
    });
  }

  signIn(email: string, password: string): Observable<any> {
    const options = {...defaultRequestOptions, observe: 'response'};
    return this.http.post(`${this.baseUrl}/auth/sign-in`, {emailOrUsername: email, password}, options as any)
      .pipe(
        tap((res: any) => {
          const token = res.body['accessToken'];
          if (token) {
            localStorage.setItem('token', token);
          }
        })
      );
  }

  checkIfUserCookieExists() {
    if (!!this.userSubject.value)
      return true;
    else if (document.cookie.includes('rf')) {
      this.me();
      return true;
    } else
      return false;
  }
}
