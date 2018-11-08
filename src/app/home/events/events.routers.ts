import { Routes } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events.component';


export const eventsRoutes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    children: [
      {
        path: '',
        component: EventListComponent
      },
      {
        path: ':id',
        component: EventDetailsComponent
      }
    ]
  }
];


