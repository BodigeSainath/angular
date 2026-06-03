import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivescompo',
  imports: [FormsModule, CommonModule],
  templateUrl: './directivescompo.html',
  styleUrl: './directivescompo.css',
})
export class Directivescompo {
  num:number =0;
  carArr = ['Tata', 'Honda', 'Maruti', 'Toyota'];

  employees = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];
  taskTodo : string ='All';
  tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];
  taskStatus(){
    if(this.taskTodo=="Completed"){  
        return this.tasks.filter(t=>t.completed);
    }else if(this.taskTodo=="Pending"){
      return this.tasks.filter(t => !t.completed);
    }
    else{
      return this.tasks;
    }
  }
}
