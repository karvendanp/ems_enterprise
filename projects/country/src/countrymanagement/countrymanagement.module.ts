import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';
import {  Routes , RouterModule } from '@angular/router';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
 {
   path: 'countrylist',
   component:CountryListComponent
 },
 {
   path:'countrydetail',
   component:CountrydetailComponent
 }
];
@NgModule({
  declarations: [CountryListComponent, CountrydetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[CountryService]
})
export class CountrymanagementModule { }
