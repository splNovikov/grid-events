import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';


// Custom
import { MaterialModule } from './modules/material.module';
// components, pipes, directives:


/// Angular
const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  BrowserAnimationsModule,
  LayoutModule
];

@NgModule({
  imports: [
    ...angularModules,
    MaterialModule
  ],
  declarations: [
  ],
  exports: [
    ...angularModules,
    MaterialModule
  ],
  providers: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
