import {  Routes } from '@angular/router';
import { newsRoutes } from './home/news/news.routes';
import { eventsRoutes } from './home/events/events.routes';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  ...newsRoutes,
  ...eventsRoutes
];

