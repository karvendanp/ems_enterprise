import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Country } from '../models/country';
import { Observable,throwError  } from 'rxjs';
import 'rxjs/add/operator/map';
import {catchError, retry} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};

@Injectable()
export class CountryService {

  apiURL:string = "http://localhost:9090/api/";
  constructor(private http : HttpClient) { }
       
   public getCountries():Observable<Country[]>{
    return this.http.get(this.apiURL + "country").map(res => <Country[]>res); 
  }
   public getCountry(code:string):Observable<Country>{
    return this.http.get<Country>(this.apiURL + "country/" + code).map(res => <Country>res);
  }
  public updateCountry(country: Country): Observable<Object> {
    return this.http.put(`${this.apiURL + "country/"}/${country.code}`, country);
  }
}
