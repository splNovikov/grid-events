import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsFormComponent } from './news-form/news-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FeedComponent,
    NewsDetailsComponent,
    NewsEditComponent,
    NewsCreateComponent,
    NewsFormComponent
  ]
})
export class NewsModule {
}
