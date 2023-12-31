import { Injectable }                                                              from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError }                                                  from 'rxjs';
import { catchError, switchMap }                                                   from 'rxjs/operators';
import { Router }                                                                  from '@angular/router';
import { AuthService }                                                             from '../../auth.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private readonly authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.authService.refreshToken().pipe(
            switchMap(({accessToken}) => {
              const clonedRequest = request.clone({setHeaders: {Authorization: `Bearer ${ accessToken }`}});
              localStorage.setItem('token', accessToken);
              this.authService.getUserInfo(true).then();
              return next.handle(clonedRequest);
            })
          );
        }
        return throwError(error);
      })
    );
  }
}
