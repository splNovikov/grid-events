import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.routers';
import { NewsModule } from './home/news/news.module';
import { EventsModule } from './home/events/events.module';
import { EventsService, NewsService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // Custom
    SharedModule.forRoot(),
    // Pages:
    NewsModule,
    EventsModule
  ],
  providers: [NewsService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
