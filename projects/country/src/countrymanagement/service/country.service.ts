import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Country } from '../models/country';
import { Observable,of, BehaviorSubject  } from 'rxjs';
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

private countryInfo: BehaviorSubject<Country> = new BehaviorSubject<Country>({} as Country);
public countyInfo$ = this.countryInfo.asObservable();

private countrycollection: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);
public countrycollection$ = this.countrycollection.asObservable();

updateCountryInfo(country: Country): void {
  this.countryInfo.next(country);
}

updateCountryCollection(country: Country[]): void {
  this.countrycollection.next(country);
}

  apiURL:string = "http://localhost:8085/restapi/api/";
  constructor(private http : HttpClient) { }
       
   public getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.apiURL + "country"); 
  }
   public getCountry(code:string):Observable<Country>{
    return this.http.get<Country>(this.apiURL + "country/" + code);
  }
  public updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(this.apiURL + "country/", country)
      .pipe(
        catchError(this.handleError('country', country))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed in API: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}
