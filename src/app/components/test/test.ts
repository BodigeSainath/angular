import { Component } from '@angular/core';
import employeedata from './employess';
import { CommonModule } from '@angular/common';
import { TestpipePipe } from '../../custom-pipes/testpipe-pipe';



@Component({
  selector: 'app-test',
  imports: [CommonModule, TestpipePipe],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
employeeArr= employeedata;
}
