import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'cny-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

   countries:Country = [];
  constructor(private countryService : CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe((data)=>{
      this.countries = data;
    });
  }

}
