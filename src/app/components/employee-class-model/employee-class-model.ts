import { Component, inject } from '@angular/core';
import { EmployeeServiceClassModel } from '../../services/employee-service-class-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employee-class-model',
  imports: [CommonModule],
  templateUrl: './employee-class-model.html',
  styleUrl: './employee-class-model.css',
})
export class EmployeeClassModel {
  employeeService = inject(EmployeeServiceClassModel);
  employees$ : Observable<Employee[]> | undefined;

  ngOnInit(){
    //this.employees$=this.employeeService.getAllEmployees();
    this.employeeService.getAllEmployees().subscribe((response)=>{
      console.log(response);
    });
  }
}
