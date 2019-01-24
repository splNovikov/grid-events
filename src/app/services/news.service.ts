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

  public loadNewsItem(id: string): Observable<INews> {
    return this._http
      .get<INews>(`${apiRoutes.news}/${id}`);
  }

  public createNews(newsItem: INews): Observable<INews> {
    return this._http
      .post<INews>(apiRoutes.news, newsItem);
  }

  public editNews(newsItem: INews): Observable<INews> {
    return this._http
      .put<INews>(apiRoutes.news, newsItem);
  }

  public deleteNews(newsItem: INews): Observable<boolean> {
    return this._http
      .delete<boolean>(`${apiRoutes.news}/${newsItem.id}`);
  }
}
