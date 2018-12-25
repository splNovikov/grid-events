import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { IUser } from '../interfaces';
import { apiRoutes } from '../constants/api-routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<IUser> = new BehaviorSubject(this.getUserFromStorage());

  constructor(private _http: HttpClient) {
  }

  public get user(): Observable<IUser> {
    return this._user.asObservable();
  }

  public loadUser(): Subscription {
    return this._http
      .get<IUser>(apiRoutes.me)
      .subscribe(this.handleLoadUserSubscription);
  }

  private handleLoadUserSubscription = (user: IUser): void => {
    this.setUserToStorage(user);
    this._user.next(Object.assign({}, user));
  }

  private setUserToStorage = (user: IUser) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  private getUserFromStorage(): IUser {
    return JSON.parse(window.localStorage.getItem('user'));
  }
}
