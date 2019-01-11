import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
              private _newsService: NewsService) {
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

  private setNewsItem = (newsItem: INews) => {
    this.newsItem = newsItem;
  }

}
