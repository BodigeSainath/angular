import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetailscompo',
  imports: [],
  templateUrl: './productdetailscompo.html',
  styleUrl: './productdetailscompo.css',
})
export class Productdetailscompo {
   product: any;
	  activatedRoute = inject(ActivatedRoute);
	  ngOnInit() {
		this.activatedRoute.queryParams.subscribe(params => {
		  this.product = params;
		  console.log(params)
		})
	  }
}
