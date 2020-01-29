import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders , HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  countryApi = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  data;
  apis = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

 

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