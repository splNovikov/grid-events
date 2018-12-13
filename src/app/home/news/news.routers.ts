import { Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AuthGuard } from '../../services';

export const newsRoutes: Routes = [
  {
    path: 'feed',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListComponent
      },
      {
        path: ':id',
        component: NewsDetailsComponent,
        // todo: only when id is === add
        canActivate: [AuthGuard]
      }
    ]
  }
];


