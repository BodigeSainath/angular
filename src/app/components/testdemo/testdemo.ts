import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testdemo',
  imports: [FormsModule],
  templateUrl: './testdemo.html',
  styleUrl: './testdemo.css',
})
export class Testdemo {
  msg:string ='';
  typedChar :number =0;
  remainingchar : number =100;
  countChar(){
    this.typedChar=this.msg.length;
    this.remainingchar= 100-this.typedChar;
  }
}
