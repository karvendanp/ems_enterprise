import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  apiURL:string = "http://localhost:9090/api/";
  constructor(private http : HttpClient) { }
  
   public getCountries(){
     return this.http.get(this.apiURL + "country");
   }
   public getCountry(code:string){
    return this.http.get(this.apiURL + "country/" + code);
  }
}
