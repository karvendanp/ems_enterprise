import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../models/country';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/internal/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'cny-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  private unsubscribe$ = new Subject();
   countries:Country[] = null;;
  constructor(private countryService : CountryService, private router: Router) { }
  ngOnInit() {
    
    this.countryService.countrycollection$.pipe(takeUntil(this.unsubscribe$)).subscribe((countryList: Country[]) => {
      if(typeof countryList ==='undefined' || countryList === null || countryList.length === 0 )  {
        this.countryService.getCountries().subscribe((data)=>{
          this.countries = data;
          this.countryService.updateCountryCollection(data);
        });
      } else {
        this.countries = countryList;
      }
    });
  }

  countryDetails(country: Country): void {
    this.countryService.updateCountryInfo(country);
    this.router.navigate(['/countrydetail']);
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
