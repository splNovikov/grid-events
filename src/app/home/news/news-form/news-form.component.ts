import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { INews } from '../../../interfaces';

@Component({
  selector: 'ge-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFormComponent implements OnChanges {

  @Input()
  public newsItem: INews;

  @Output()
  formSubmit: EventEmitter<INews> = new EventEmitter<INews>();

  public newsForm = this._fb.group({
    title: ['', Validators.required],
    content: [''],
    images: ['']
  });

  constructor(private _fb: FormBuilder) {
  }

  ngOnChanges({newsItem}: SimpleChanges) {
    if (newsItem && newsItem.currentValue) {
      this.newsForm.setValue({
        title: newsItem.currentValue.title,
        content: newsItem.currentValue.content,
        images: newsItem.currentValue.images
      });
    }
  }

  public onSubmit = (): void => {
    this.formSubmit.emit(this.composeNewsItem(this.newsForm.value));
  }

  private composeNewsItem = (formValue): INews => ({
    ...formValue,
    // todo: fix this - images should be an array with possibility to choose multiple images
    images: Array.isArray(formValue.images) ? formValue.images : [formValue.images]
  })
}
