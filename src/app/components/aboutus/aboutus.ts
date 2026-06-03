import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
  router= inject(Router);
  location = inject(Location)
  doSomethingandGo(){
    console.log('do some action ');
    this.router.navigateByUrl('/home');
  }
  previous(){
    this.location.back();
  }
  next(){
    this.location.forward();
  }
}
