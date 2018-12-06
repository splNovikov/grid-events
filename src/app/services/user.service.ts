import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs/index';

import { IUser } from '../interfaces';
import { apiRoutes } from '../constants/api-routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<IUser> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) {
  }

  public get user(): Observable<IUser> {
    return this._user.asObservable();
  }

  public loadUser(): Subscription {
    return this._http
      .get<IUser>(apiRoutes.me)
      .subscribe((user: IUser) => {
        this._user.next(Object.assign({}, user));
      });
  }
}
