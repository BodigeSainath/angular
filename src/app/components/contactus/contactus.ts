import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  hasChanges:boolean = true; 
  user={
    firstName:'Brad',
    lastName: 'Kick',
    email: 'test@gmail.com'
  }
  submitMyForm(myFormData : any){
    console.log(myFormData)
    this.hasChanges = false;
  }
}
