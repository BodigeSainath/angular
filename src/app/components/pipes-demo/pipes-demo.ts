import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'VirAT KoHLi';
  mySal = 5000;
  dateObj = new Date();
  user={name :'sainath', role:'trainee',company: 'XYZ'}
  keepOriginalOrder = ()=> 0;
  cars = ['BMW','Lambo','Ferrari','Bugatti','McLaren']
  msg = '';
  numArr = [30,10,40,50,60]
 newNum : number =0;
 addNew(){
  this.numArr.push(this.newNum);
 }
}
