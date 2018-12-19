import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ge-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent {
  public newsForm = this._fb.group({
    title: ['', Validators.required],
    content: ['']
  });

  constructor(private _fb: FormBuilder) {
  }

  public onSubmit = (): void => {
    console.warn(this.newsForm.value);
  }
}
