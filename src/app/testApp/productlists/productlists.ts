import { Component,OnInit, inject, ChangeDetectorRef } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductService } from '../productlist-service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productlists.html',
  styleUrls: ['./productlists.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  isEdit:boolean = false;
  selectedProduct: Product = {
    ProductId: 0,
    ProductName: '',
    ProductPrice: 0,
    ProductCategory: ''
  };

  newProduct: Product = {
    ProductId: 0,
    ProductName: '',
    ProductPrice: 0,
    ProductCategory: ''
  };

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.GetProducts();
  }
  // GET PRODUCTS
  GetProducts(){
    this.http.get<Product[]>('http://localhost:8080/Product')
    .subscribe({
      next:(result)=>{
        console.log(result);
        this.products = result;
        this.cd.detectChanges();
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  // ADD PRODUCT
  AddProduct(){
    this.http.post('http://localhost:8080/Product', this.newProduct)
    .subscribe({
      next:()=>{
        alert("Product Added Successfully")
        this.GetProducts();
        this.newProduct = {
          ProductId: 0,
          ProductName: '',
          ProductPrice: 0,
          ProductCategory: ''
        };
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  // EDIT PRODUCT
  EditProduct(id:number){
    let product =
      this.products.find(x => x.ProductId == id);
    if(product){
      this.selectedProduct = {...product};
      this.isEdit = true;
    }
  }
  // UPDATE PRODUCT
  UpdateProduct(){
    this.http.put('http://localhost:8080/Product', this.selectedProduct)
    .subscribe({
      next:()=>{
        alert("Product Updated Successfully");
        this.isEdit = false;
        this.GetProducts();
      },
      error:(err)=>{
        console.log(err);
      }
    });  }
  // VIEW PRODUCT
  ViewProduct(id:number){
    let product =
      this.products.find(x => x.ProductId == id);
    alert(
      "Product Name : " + product?.ProductName +
      "\nPrice : " + product?.ProductPrice +
      "\nCategory : " + product?.ProductCategory
    );
  }
  // DELETE PRODUCT
DeleteProduct(id:number){
    let confirmDelete =
      confirm("Are you sure you want to delete this employee?");
    if(confirmDelete){
      this.http.delete('http://localhost:8080/Product/${id}')
      .subscribe({
        next:()=>{
          alert("Product Deleted Successfully");
          this.GetProducts();
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
  }
 }