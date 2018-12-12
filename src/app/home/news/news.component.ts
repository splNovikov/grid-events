import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { NewsService, UserService } from '../../services';
import { IUser } from '../../interfaces';


@Component({
  selector: 'ge-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(private _userService: UserService,
              private _newsService: NewsService) {
  }

  ngOnInit() {
    this._newsService.loadNews();
    this.user$ = this._userService.user;
  }

  public handleClickAddNews = (): void => {
    alert('ADD news');
  }

}


