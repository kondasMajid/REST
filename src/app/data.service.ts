import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders , HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  data;
  // api = 'https://jsonplaceholder.typicode.com/posts';
  apis = 'http://18.191.141.83/v1/users/237/deliveries?sorting=id:desc';

  token = 'klloyds-user-token';

  value = 'B2A8AA92FE13A3FFD83FEF159A47A7E8';

  constructor(private http: HttpClient) {  }

   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'klloyds-user-token': 'B2A8AA92FE13A3FFD83FEF159A47A7E8'
  }
  
    requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict) 
  };

    //  headers = new HttpHeaders().set("X-CustomeHeader", "B2A8AA92FE13A3FFD83FEF159A47A7E8")
  
  getDatas (){
       return this.http.get(this.apis, this.requestOptions );
  }
}


  
// getDatas (){
//   return this.http.get(this.apis,  { headers: new HttpHeaders({'Authorization': this.token  + this.value})
//  });

// }