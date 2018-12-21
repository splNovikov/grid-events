import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiRoutes } from '../constants/api-routes';
import { INews } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) {
  }

  public loadNews(): Observable<INews[]> {
    return this._http
      .get<INews[]>(apiRoutes.news);
  }

  public createNews(newsItem: INews): Observable<INews> {
    return this._http
      .post<INews>(apiRoutes.news, newsItem);
  }
}
