import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-table-child',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-table-child.html',
  styleUrl: './employee-table-child.css',
  inputs:['employeeArr','deleteEmployee']
})
export class EmployeeTableChild {
  employeeArr:any;
 deleteEmployee:any;
}