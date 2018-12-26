import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { INews, IUser } from '../../../interfaces';
import { NewsService, UserService } from '../../../services';
import { ConfirmModalComponent } from '../../modals';

@Component({
  selector: 'ge-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public user$: Observable<IUser>;
  public news$: Observable<INews[]>;

  constructor(private _dialog: MatDialog,
              private _userService: UserService,
              private _newsService: NewsService) {
  }

  ngOnInit() {
    this.news$ = this._newsService.loadNews();
    this.user$ = this._userService.user;
  }

  public handleRemove = (newsItem: INews): void => {
    this._dialog.open(ConfirmModalComponent, {
      data: {
        title: `Do you really want to delete ${newsItem.title}?`,
        content: `You are going to delete ${newsItem.title}. Are you sure?`
      }
    });
  }
}
