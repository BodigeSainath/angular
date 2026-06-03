import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../java/products/product-list/product.model';
@Injectable({
  providedIn: 'root',
})
export class Productservice {
   private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/Product/';

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
