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
export class NewsFormComponent implements OnDestroy {
  public newsForm = this._fb.group({
    title: ['', Validators.required],
    content: [''],
    images: ['']
  });

  private user: IUser;

  private userSubscription: Subscription;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _userService: UserService,
              private _newsService: NewsService) {
    this.userSubscription = _userService.user.subscribe(this.setUser);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  public onSubmit = (): void => {
    this._newsService
      .createNews(this.composeNewsItem(this.newsForm.value))
      .subscribe(this.handleCreateNewsSubscription);
  }

  private setUser = (user: IUser): void => {
    this.user = user;
  }

  private composeNewsItem = (formValue): INews => ({
    ...formValue,
    authorId: this.user.id,
    dateCreated: new Date().getTime(),
    // todo: images should be an array
    images: [formValue.images]
  })

  private handleCreateNewsSubscription = (): void => {
    this._router.navigate(['/feed']);
  }
}
