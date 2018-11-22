import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services';
import { INews } from '../../interfaces/news.interface';


@Component({
  selector: 'ge-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  public news: INews[] = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit() {
    this._newsService.getNews()
      .subscribe(this.handleNewsSubscription);
  }

  private handleNewsSubscription = (news: INews[]) => {
    this.news = [].concat(news);
  }

}


