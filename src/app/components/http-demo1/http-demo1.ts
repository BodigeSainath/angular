import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api= ' https://jsonplaceholder.typicode.com/users';
  constructor(private Http: HttpClient){}
  ngOnInit(){
    this.fetchUser_javascript();
    this.fetchUser_angular();
  }
  fetchUser_javascript(){ // 
    fetch(this.user_api).then(
      (response)=>{
        console.log(response);
        response.json().then((finalResponse)=> console.log(finalResponse));
      });
  }

  fetchUser_angular(){
    this.Http.get(this.user_api).subscribe(response=>console.log(response))
  }
}
