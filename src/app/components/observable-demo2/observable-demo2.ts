import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  htppClient = inject(HttpClient);
  ngOnInit(){
    this.forkjoin_demo();
    this.mergeMap_demo();
  }
  forkjoin_demo(){
    let api1=this.htppClient.get('https://jsonplaceholder.typicode.com/users');
     let api2=this.htppClient.get('https://jsonplaceholder.typicode.com/comments');
    forkJoin([api1,api2]).subscribe((responseArr) =>{
      console.log(responseArr);
    });

  }
  mergeMap_demo(){
    let user_obs= of(1,2,3,4,5); // outer obserbale
    user_obs.pipe(mergeMap((userId)=>{
      return this.htppClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe(finalresponse=>{
      console.log(finalresponse);
    })
  }
}
