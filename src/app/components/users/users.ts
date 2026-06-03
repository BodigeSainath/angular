import { Component } from '@angular/core';
import * as data from './user_data.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userArr = (data as any).default;
}