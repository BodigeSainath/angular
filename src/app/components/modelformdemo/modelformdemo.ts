import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelformdemo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modelformdemo.html',
  styleUrl: './modelformdemo.css',
})
export class Modelformdemo {
   registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      firstName: ['Kick', [Validators.required, Validators.minLength(5)]],
      lastName: ['Buttowski', [Validators.required, Validators.minLength(5)]],
      email: ['Kick@gmail.com', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        city: [''],
        state: [''],
        pincode: ['']
      })
    });
  }
}



 //   firstName: new FormControl('Kick',[Validators.required,Validators.minLength(5)]),
    //   lastName: new FormControl('Battowski'),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(),
    //     state: new FormControl(),
    //     pincode: new FormControl(),
    //   }),
    // },{updateOn:'blur'});