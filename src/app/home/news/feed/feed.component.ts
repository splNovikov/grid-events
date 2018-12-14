import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { INews, IUser } from '../../../interfaces';
import { NewsService, UserService } from '../../../services';

@Component({
  selector: 'ge-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public user$: Observable<IUser>;
  public news$: Observable<INews[]>;

  constructor(private _userService: UserService,
              private _newsService: NewsService,
              private _router: Router) {
  }

  ngOnInit() {
    this._newsService.loadNews();
    this.news$ = this._newsService.news;
    this.user$ = this._userService.user;
  }
}
