import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { IUser } from '../interfaces';
import { apiRoutes } from '../constants/api-routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  public getInfo(id: string): Observable<IUser> {
    const requestOptions = {
      params: new HttpParams()
        .set('id', id)
    };

    return this._http
      .get<IUser>(apiRoutes.me, requestOptions);
  }
}
