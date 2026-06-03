import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-userlist',
  imports: [],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {
  httpClient= inject(HttpClient);
  user_api='https://jsonplaceholder.typicode.com/users';
  users:any =signal([]);
  ngOnInit(){
    this.httpClient.get(this.user_api).subscribe((response)=>{
      this.users.set(response);
    })
  }
}
