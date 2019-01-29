import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from '../../../interfaces';
import { NewsService } from '../../../services';

@Component({
  selector: 'ge-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  public newsItem: INews;

  private aRouteSubscription: any;

  constructor(private _activatedRoute: ActivatedRoute,
              private _newsService: NewsService) {
  }

  ngOnInit() {
    this.aRouteSubscription = this._activatedRoute.params.subscribe(params => {
      this._newsService.loadNewsItem(params['id'])
        .subscribe(this.setNewsItem);
    });
  }

  ngOnDestroy() {
    this.aRouteSubscription.unsubscribe();
  }

  private setNewsItem = (newsItem: INews) => {
    this.newsItem = newsItem;
  }

}
