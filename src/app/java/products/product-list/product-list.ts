import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Productservice } from '../../../services/productservice';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  private readonly service = inject(Productservice);

  products: Product[] = [];

  loading = false;

  error = '';

  ngOnInit(): void {
    this.load();
  }

  load(): void {

    this.loading = true;

    this.error = '';

    this.service.list().subscribe({

      next: (data) => {

        this.products = data;

        this.loading = false;
      },

      error: (err) => {

        this.error = 'Could not load products';

        this.loading = false;

        console.error(err);
      }
    });
  }

  remove(product: Product): void {

    if (product.Id == null) return;

    this.service.delete(product.Id).subscribe({

      next: () => this.load(),

      error: (err) => {

        this.error = 'Delete failed';

        console.error(err);
      }
    });
  }
}