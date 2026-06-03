import { Component, inject } from '@angular/core';
import { ProductServiceA } from '../../services/product-service-a';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-http',
  imports: [CommonModule],
  templateUrl: './product-list-http.html',
  styleUrl: './product-list-http.css',
})
export class ProductListHttp {
  productService = inject(ProductServiceA);

  products$: Observable<any> | undefined;

  ngOnInit(){
    this.products$ = this.productService.getAllProducts();
  }

  // products$ : Observable<any> 

  // ngOnInit(){
  //   this.products$ = this.productService.getAllProducts();
  // }
}
