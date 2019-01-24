import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NewsService } from '../../../services';
import { INews } from '../../../interfaces';

@Component({
  selector: 'ge-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit, OnDestroy {

  public newsItem: INews;

  private sub: any;

  constructor(private _activatedRoute: ActivatedRoute,
              private _newsService: NewsService,
              private _router: Router) {
  }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this._newsService.loadNewsItem(params['id'])
        .subscribe(this.setNewsItem);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public handleEditNewsSubmit = (newsItem: INews) => {
    this._newsService
      .editNews(newsItem)
      .subscribe(this.handleEditNewsSubscription);
  }

  private setNewsItem = (newsItem: INews) => {
    this.newsItem = newsItem;
  }

  private handleEditNewsSubscription = (): void => {
    this._router.navigate(['/feed']);
  }

}
