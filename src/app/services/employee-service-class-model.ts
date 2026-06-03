import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceClassModel {
  employee_api= 'http://localhost:3000/employees';
  httpClient= inject(HttpClient);

  getAllEmployees(){
    return this.httpClient.get(this.employee_api);
  }
}
