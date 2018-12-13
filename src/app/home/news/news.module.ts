import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FeedComponent,
    NewsDetailsComponent,
    NewsEditComponent
  ]
})
export class NewsModule {
}
