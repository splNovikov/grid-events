import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { UserService } from './services';
import { IUser } from './interfaces';


@Component({
  selector: 'ge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.loadUser();
    this.user$ = this._userService.user;
  }
}
