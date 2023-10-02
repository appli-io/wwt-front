import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseUser } from '../interfaces/response-user.interface';
import { IApi } from '../../../shared/interfaces/api.interface';
import { environment } from '../../../../environments/environment';
import { defaultRequestOptions } from '../../../shared/utils/request.utils';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseUrl = environment.authentication.baseUrl;

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<IApi<IResponseUser>> {
    return this.http.get<IApi<IResponseUser>>(`${ this.baseUrl }/users`, {...defaultRequestOptions});
  }
}
