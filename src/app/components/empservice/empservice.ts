import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
@Component({
  selector: 'app-empservice',
  imports: [],
  templateUrl: './empservice.html',
  styleUrl: './empservice.css',
})
export class Empservice {
  constructor(private emp:EmployeeService){}
  employees : any[] =[];
  ngOnInit(){
   this.employees= this.emp.getEmployees();
  }
  filterEmployees(event:any){
    const value=event.target.value;
    if(value==='All'){
      this.employees=this.emp.getEmployees();
    }
   else if(value==='male'){
      this.employees=this.emp.getMaleEmployees();
    }
    else if(value==='female'){
      this.employees= this.emp.getFemaleEmployees();
    }
  }
}
