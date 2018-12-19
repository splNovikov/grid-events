import { Routes } from '@angular/router';

import { CanCreateNewsGuard, CanUpdateNewsGuard } from '../../services';
import { FeedComponent } from './feed/feed.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsCreateComponent } from './news-create/news-create.component';

export const newsRoutes: Routes = [
  {
    path: 'feed', component: FeedComponent
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent
  },
  {
    path: 'news/:id/edit',
    component: NewsEditComponent,
    canActivate: [CanUpdateNewsGuard]
  },
  {
    path: 'create/news',
    component: NewsCreateComponent,
    canActivate: [CanCreateNewsGuard]
  }
];


