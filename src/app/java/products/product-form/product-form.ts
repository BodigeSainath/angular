import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Productservice } from '../../../services/productservice';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm implements OnInit {

  private readonly service = inject(Productservice);

  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  model: Product = {

    Name: '',

    Description: '',

    Price: 0,

    Quantity: 0
  };

  isEdit = false;

  loading = false;

  saving = false;

  error = '';

  private editId?: number;

  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {

      this.isEdit = true;

      this.editId = Number(idParam);

      this.loading = true;

      this.service.get(this.editId).subscribe({

        next: (p) => {

          this.model = p;

          this.loading = false;
        },

        error: (err) => {

          this.error = 'Could not load product';

          this.loading = false;

          console.error(err);
        }
      });
    }
  }

  save(form: NgForm): void {

    if (form.invalid) return;

    const request$ = this.isEdit && this.editId != null

      ? this.service.update(this.editId, this.model)

      : this.service.create(this.model);

    request$.subscribe({

      next: () => this.router.navigate(['/products']),

      error: (err) => {

        this.error = 'Save failed';

        console.error(err);
      }
    });
  }
}