import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees=[{ id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000,  gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000,  gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000,  gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, gender: 'female' }];
        
        getEmployees(){
          return this.employees;
        }
        getMaleEmployees(){
         return  this.employees.filter(emp => emp.gender==='male');
        }
        getFemaleEmployees(){
        return  this.employees.filter(emp=>emp.gender==="Female");
        }
}
