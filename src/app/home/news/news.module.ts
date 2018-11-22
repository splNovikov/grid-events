import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsDetailsComponent
  ]
})
export class NewsModule { }
