import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../models/country';
import { ActivatedRoute , Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';


@Component({
  selector: 'cny-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
 private unsubscribe$ = new Subject();
 
  countrydetail:Country;
  constructor(private countryService: CountryService, private _route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.countrydetail = {
      code: '',
      continent:'',
      name:''
    };
    this.countryService.countyInfo$.pipe(takeUntil(this.unsubscribe$)).subscribe((country: Country) => {
      this.countrydetail = country;
      
      console.log(country);
    });

    // this._route.params.subscribe((params) => {
    //     var code = params["code"];
    //     this.countryService.getCountry(code).subscribe((data)=>{
    //     this.countrydetail = data;
    //   });
    //   });

  }

  saveCountry() {
    this.countryService.updateCountry(this.countrydetail)
      .subscribe(data => {
        this.gotoList();
      }, error => {

      });
      
  }

  gotoList() {
    this.router.navigate(['/countrylist']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}