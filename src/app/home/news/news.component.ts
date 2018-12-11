import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { UserService } from '../../services';
import { IUser } from '../../interfaces';


@Component({
  selector: 'ge-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this._userService.user;
  }

  public handleClickAddNews = (): void => {
    alert('ADD news');
  }

}


