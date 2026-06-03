import { Component } from '@angular/core';
import empdata from './empdata';
import { EmployeeTableChild } from '../employee-table-child/employee-table-child';
import { EmployeeAddChild } from '../employee-add-child/employee-add-child';
@Component({
  selector: 'app-compocomassign-parent',
  imports: [EmployeeTableChild,EmployeeAddChild],
  templateUrl: './compocomassign-parent.html',
  styleUrl: './compocomassign-parent.css',
  inputs: ['./compocomassign-parent']
})
export class CompocomassignParent {

}
