import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
              private _newsService: NewsService,
              private _router: Router) {
  }

  ngOnInit() {
    this._newsService.loadNews();
    this.user$ = this._userService.user;
  }

  public handleClickAddNews = (): void => {
    // todo: use constants
    this._router.navigate(['/feed', 'add']);
  }

}


