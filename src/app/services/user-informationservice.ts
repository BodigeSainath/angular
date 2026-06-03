import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformationservice {
 private  userRole='trainer';
  getUserRole(){
    return this.userRole;
  }
}
