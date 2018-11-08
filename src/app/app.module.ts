import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { EventsService, NewsService } from './services';

import { EventsModule } from './home/events/events.module';
import { NewsModule } from './home/news/news.module';
import { appRoutes } from './app.routers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NewsModule,
    EventsModule
  ],
  providers: [NewsService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
