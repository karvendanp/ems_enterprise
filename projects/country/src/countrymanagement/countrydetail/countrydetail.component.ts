import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../models/country';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'cny-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {

  countrydetail:Country;
  constructor(private countryService: CountryService, private _route:ActivatedRoute) { }

  ngOnInit() {
      this._route.params.subscribe((params) => {
      var code = params["code"];
       this.countryService.getCountry(code).subscribe((data)=>{
        this.countrydetail = data;
      });
  
  });
  }
}