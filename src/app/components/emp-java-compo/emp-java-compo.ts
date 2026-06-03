import { Component } from '@angular/core';
import { EmployeeJava } from '../../models/employee-java';
import { Employeejava } from '../../services/employeejava';
import { CommonModule } from '@angular/common';
import { Department } from '../../models/department';

@Component({
  selector: 'app-emp-java-compo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-java-compo.html',
  styleUrl: './emp-java-compo.css',
})
export class EmpJavaCompo {
  //  employees: EmployeeJava[] = [];
  departments: Department[] = [];
    constructor(private employeeService: Employeejava) { }
  
    ngOnInit(): void {
      this.loadDepartments();
    }
  
expandedDepartment: number | null = null;

toggleDepartment(index: number) {

  if (this.expandedDepartment === index) {

    this.expandedDepartment = null;
  }
  else {

    this.expandedDepartment = index;
  }
}

    // loadEmployees() {
    //   this.employeeService.getEmployees()
    //     .subscribe(data => {
    //       this.employees = data;
    //     });
    // }
    loadDepartments() {

  this.employeeService.getDepartments()
    .subscribe({

  next: (data) => {

    console.log("SUCCESS DATA", data);

    this.departments = data;
      this.expandedDepartment = 0;

  },

  error: (err) => {

    console.log("FULL ERROR", err);

    console.log("STATUS", err.status);

    console.log("MESSAGE", err.message);

    console.log("ERROR", err.error);
  }
});
  }
}
