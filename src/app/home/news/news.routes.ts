import { Routes } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { AuthGuard } from '../../services';

export const newsRoutes: Routes = [
  {
    // todo: move feed to constants
    path: 'feed', component: FeedComponent
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent
  },
  {
    path: 'news/:id/edit',
    component: NewsEditComponent,
    canActivate: [AuthGuard]
  }
];


