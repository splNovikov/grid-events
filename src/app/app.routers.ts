import {  Routes } from '@angular/router';
import { newsRoutes } from './home/news/news.routers';
import { eventsRoutes } from './home/events/events.routers';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  ...newsRoutes,
  ...eventsRoutes
];

