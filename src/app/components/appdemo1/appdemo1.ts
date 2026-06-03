import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-appdemo1',
  imports: [],
  templateUrl: './appdemo1.html',
  styleUrl: './appdemo1.css',
})
export class Appdemo1 {
  constructor(private mathService: MathService){}
  ngOnInit(){
    console.log('demo 1')
    console.log('Sum is: ',this.mathService.sum([10,20,30,40,50]));
    console.log('Average is: ',this.mathService.average([10,20,30,40,50]));
  }
}
