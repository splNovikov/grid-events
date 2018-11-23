import { Component, OnInit } from '@angular/core';

import { INews } from '../../../interfaces/news.interface';
import { NewsService } from '../../../services';

@Component({
  selector: 'ge-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public news: INews[] = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit() {
    // todo: unsubscribe
    this._newsService.getNews()
      .subscribe(this.handleNewsSubscription);
  }

  private handleNewsSubscription = (news: INews[]) => {
    this.news = [].concat(news);
  }

}
