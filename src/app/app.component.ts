import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';

import { UserService } from './services';
import { IUser } from './interfaces';


@Component({
  selector: 'ge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;

  public user: IUser;

  // get info about me:
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.userSubscription = this._userService.getInfo()
      .subscribe(this.handleUserSubscription);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  private handleUserSubscription = (user: IUser) => {
    if (!user) {
      return;
    }

    this.user = user;
  };
}
