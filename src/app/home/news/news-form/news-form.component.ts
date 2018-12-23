import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators';
import { Subscription } from 'rxjs';

import { INews, IUser } from '../../../interfaces';
import { NewsService, UserService } from '../../../services';

@Component({
  selector: 'ge-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent {
  public newsForm = this._fb.group({
    title: ['', Validators.required],
    content: [''],
    images: ['']
  });

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _newsService: NewsService) {
  }

  public onSubmit = (): void => {
    this._newsService
      .createNews(this.composeNewsItem(this.newsForm.value))
      .subscribe(this.handleCreateNewsSubscription);
  }

  private composeNewsItem = (formValue): INews => ({
    ...formValue,
    // todo: images should be an array
    images: [formValue.images]
  })

  private handleCreateNewsSubscription = (): void => {
    this._router.navigate(['/feed']);
  }
}
