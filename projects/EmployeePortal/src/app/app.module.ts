import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from 'projects/common/src/public-api';
import { UserModule } from 'projects/contact/src/public-api';
import { CountrymanagementModule } from 'projects/country/src/projects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    UserModule,
    CountrymanagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
