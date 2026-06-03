import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-appdemo2',
  imports: [],
  templateUrl: './appdemo2.html',
  styleUrl: './appdemo2.css',
})
export class Appdemo2 {
  mathService= inject(MathService);
  ngOnInit(){
    console.log('App demo 2')
    console.log('Index of Max Ele',this.mathService.indexOfMax([10,20,30,140,50]));
    console.log('Sum is: ',this.mathService.sum([10,20,30,40,50]));
    console.log('Average is: ',this.mathService.average([10,20,30,40,50]));
  }
}
