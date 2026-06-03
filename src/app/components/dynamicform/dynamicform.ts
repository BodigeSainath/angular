import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './dynamicform.html',
  styleUrl: './dynamicform.css',
})
export class Dynamicform {
  empForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  getAllEmployees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  createNewEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.getAllEmployees().push(this.createNewEmployee());
  }

  removeEmployee(empIndex: number) {
    this.getAllEmployees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.getAllEmployees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({skill: '',exp: ''});
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
