import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { INews } from '../../../interfaces';
import { NewsService } from '../../../services';

@Component({
  selector: 'ge-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public news$: Observable<INews[]>;

  constructor(private _newsService: NewsService) {
  }

  ngOnInit() {
    this.news$ = this._newsService.news;
  }
}
