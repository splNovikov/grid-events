import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiRoutes } from '../constants/api-routes';
import { INews } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) {
  }

  public getNews(): Observable<INews[]> {
    return this._http
      .get<INews[]>(apiRoutes.news);
  }
}
