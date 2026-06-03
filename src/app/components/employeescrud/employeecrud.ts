import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import employeeData from './employee-data';

@Component({
  selector: 'app-employee-crud',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employeecrud.html',
  styleUrl: './employeecrud.css',
})
export class EmployeeCRUD {
  employees = employeeData;

     newEmployee = {
    id: 0,
    name: '',
    role: '',
    salary: 0,
    status: '',
    gender: ''
  };

  selectedEmployee: any = null;

  addEmployee() {
    this.employees.push(this.newEmployee);

    new Snackbar(
      'Employee Added Successfully',
      {
        position: 'top-center',
        timeout: 3000
      }
    );
  }

  deleteEmployee(empId: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'Employee will be deleted',
      icon: 'warning',
      showCancelButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.employees = this.employees.filter(
          emp => emp.id !== empId );}
    });
  }
  viewEmployee(emp: any){
    this.selectedEmployee = emp;
  }

}