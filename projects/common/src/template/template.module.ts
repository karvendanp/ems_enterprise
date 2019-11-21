import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './partial-component/header/header.component';
import { ContentComponent } from './partial-component/content/content.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MainComponent, HeaderComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class TemplateModule { }
