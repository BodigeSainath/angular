import { Injectable, inject } from '@angular/core';

import { HttpClient,  } from '@angular/common/http';


import { Observable } from 'rxjs';

// import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/Product/';

  // getProducts(): Observable<products[]> {

  //   return this.http.get<products[]>(this.apiUrl);
  // }
}