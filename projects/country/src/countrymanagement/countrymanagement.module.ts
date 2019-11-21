import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';
import {  Routes , RouterModule } from '@angular/router';

const routes:Routes = [
 {
   path: 'countrylist',
   component:CountryListComponent
 }
];
@NgModule({
  declarations: [CountryListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[CountryService]
})
export class CountrymanagementModule { }
