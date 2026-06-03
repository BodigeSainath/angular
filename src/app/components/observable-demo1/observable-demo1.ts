import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  time$ = interval(1000).pipe()
  ngOnInit(){
    this.from_demo();
    this.interval_demo();
  }
  from_demo(){
    let cars=['McLaren','Lambo','Ferrari'];
    let cars_obs= from(cars);
    cars_obs.subscribe((cars)=>console.log('Car Name ',cars));
  }
  num$ = interval(1000);
  even_num$= this.num$.pipe(filter(val=>(val%2==0)))
  num_square = this.num$.pipe(map(val => val* val));
  num_first = this.num$.pipe(take(5));
  interval_demo(){
    this.num$.subscribe(val => console.log(val))
  }
}
