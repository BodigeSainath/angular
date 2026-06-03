import { Component, signal } from '@angular/core';
import {form, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  loginModel = signal({email :'',password: ''});
  loginForm = form(this.loginModel);
}
