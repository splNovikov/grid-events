import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EventsComponent,
    EventListComponent,
    EventDetailsComponent
  ]
})
export class EventsModule { }
