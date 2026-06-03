import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeJava } from '../models/employee-java';
import { Department } from '../models/department';
@Injectable({
  providedIn: 'root',
})
export class Employeejava {
  apiUrl = 'http://localhost:8080/department/';

  constructor(private http: HttpClient) { }

  // getEmployees(): Observable<EmployeeJava[]> {
  //   return this.http.get<EmployeeJava[]>(this.apiUrl);
  // }
getDepartments(): Observable<Department[]> {
  return this.http.get<Department[]>(this.apiUrl);
}
  addEmployee(employee: Employee): Observable<EmployeeJava> {
    return this.http.post<EmployeeJava>(this.apiUrl, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.apiUrl, employee);
  }

}
