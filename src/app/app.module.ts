import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.routes';
import { NewsModule } from './home/news/news.module';
import { EventsModule } from './home/events/events.module';
import { ModalsModule } from './home/modals/modals.module';
import {
  EventsService,
  NewsService,
  UserService,
  CanCreateNewsGuard,
  CanUpdateNewsGuard,
  HttpErrorInterceptor
} from './services';


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
    ModalsModule,
    // Pages:
    NewsModule,
    EventsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    NewsService,
    EventsService,
    UserService,
    // Guards:
    CanCreateNewsGuard,
    CanUpdateNewsGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
