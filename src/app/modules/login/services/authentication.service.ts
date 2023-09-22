import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'http://localhost:5000/api';

  constructor(private readonly http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
    return this.http.get(`${ this.baseUrl }/users/1`);
  }
}
