import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  imports: [FormsModule],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
  para:string ="This is a paragraph"; //1
  show:boolean=true;
  showPara(){
    this.show =!this.show;
  }
  state:string =''; //2
  counter: number =0; //3
  increment(){
    this.counter+=1;
  }
  decrement(){
    this.counter-=1;
  }
  reset(){
    this.counter=0;
  }
  celsius :number = 0;
  convertTemp()
  {
    return (this.celsius *(9/5)) + 32;
  };
}
