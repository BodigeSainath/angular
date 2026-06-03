import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo1',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form-demo1.html',
  styleUrl: './template-form-demo1.css',
})
export class TemplateFormDemo1 {
  user={
    firstName:'Brad',
    lastName: 'Kick',
    email: 'test@gmail.com'
  }
  submitmyForm(myFormData : any){
    console.log(myFormData)

  }
}
