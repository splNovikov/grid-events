import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { INews } from '../../../interfaces';
import { NewsService } from '../../../services';

@Component({
  selector: 'ge-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent {

  constructor(private _newsService: NewsService,
              private _router: Router) { }

  public handleCreateNewsSubmit = (newsItem: INews) => {
    this._newsService
      .createNews(newsItem)
      .subscribe(this.handleCreateNewsSubscription);
  }

  private handleCreateNewsSubscription = (): void => {
    this._router.navigate(['/feed']);
  }

}
