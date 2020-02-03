import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders , HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  countryApi = 'http://18.191.141.83/v1/countries';
  data;
  apis = 'http://18.191.141.83/v1/users/237/deliveries';

  token = 'klloyds-user-token';
  value = 'B2A8AA92FE13A3FFD83FEF159A47A7E8';

  constructor(private http: HttpClient) {  }

   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'xxxxxxxxxxxxx-user-token': 'xxxxxxxxxxxxx'
   }
    requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict) 
  };

  // Read user data
  getDatas (){
       return this.http.get(this.apis, this.requestOptions );
  }

  // get list of countries
  getCountries(){
    return this.http.get(this.countryApi, this.requestOptions)
  }
}