import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  imports: [],
  templateUrl: './assignment2.html',
  styleUrl: './assignment2.css',
})
export class Assignment2 {
  message :string ='';
   date = Number(new Date().getHours());
   greeting(){
    if(this.date<12){
      return "Good Morning"
    }
    else if(this.date<20){
      return "Good Afternoon"
    }
    else{
      return "Good night"
    }
   } 
}
