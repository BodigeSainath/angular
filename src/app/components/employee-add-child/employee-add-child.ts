import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add-child',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-add-child.html',
  styleUrl: './employee-add-child.css',
  inputs:['employeeArr','newEmployee','addEmployee']
})
export class EmployeeAddChild {
   employeeArr: any;
   newEmployee:any;
   addEmployee:any;
}