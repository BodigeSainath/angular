import { Component } from '@angular/core';
import data from './employeecruddata';
import { EmployeeTableChild } from '../employee-table-child/employee-table-child';
import { EmployeeAddChild } from '../employee-add-child/employee-add-child';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeecrud',
  imports: [EmployeeTableChild,
    EmployeeAddChild
  ],
  templateUrl: './employeecrud.html',
  styleUrl: './employeecrud.css',
})
export class Employeecrud {
   employeeArr=data;
   newEmployee={
    id:0,
    name:'',
    role:'',
    salary:0,
    gender:''

  };
   deleteEmployee(empId: number) {
  
      Swal.fire({
        title: 'Are you sure?',
        text: 'Employee will be deleted',
        icon: 'warning',
        showCancelButton: true
      })
      .then((result) => {
        if(result.isConfirmed){
          this.employeeArr = this.employeeArr.filter(
            (emp:any) => emp.id !== empId );}
      });
    }

  
  addEmployee() {

  this.employeeArr.push(this.newEmployee);

  Swal.fire({
    title: 'Success',
    text: 'Employee Added Successfully',
    icon: 'success'
  });
}
}