import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

import { apiRoutes } from '../constants/api-routes';
import { INews } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _news: BehaviorSubject<INews[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {
  }

  public get news(): Observable<INews[]> {
    return this._news.asObservable();
  }

  // todo: I dont like subscription on each time of using this fucntion
  public loadNews(): Subscription {
    return this._http
      .get<INews[]>(apiRoutes.news)
      .subscribe((news: INews[]) => {
        this._news.next([].concat(news));
      });
  }

  // todo: that is not working now
  public createNews(newsItem: INews): Observable<INews> {
    return this._http
      .post<INews>(apiRoutes.news, newsItem);
  }
}
