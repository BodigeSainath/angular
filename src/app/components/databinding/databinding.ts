import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  courseName : string = "Angular";
  img_url : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqzMqxo3FdmgI207Z1QuXm6ndnJxp7QGm_g&s';
  flag:boolean = true;
  toggleFlag(){
    this.flag = !this.flag;
  }
  num1: number =10;
  num2: number =20;
  addResult :number =0;
  addition(val1:string,val2:string){
    this.addResult=Number(val1)+Number(val2);
  }
}
