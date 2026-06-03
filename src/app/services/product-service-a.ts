import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceA {
  httpClient= inject(HttpClient);
  getAllProducts(){
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
