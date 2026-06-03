import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInformationservice } from '../services/user-informationservice';

export const uploadGuard: CanActivateFn = (route, state) => {
  let userInformationService = inject(UserInformationservice);
  if(userInformationService .getUserRole()==='trainer'){
    return true;
  }
  else{
    alert('You Dont have enough permission for doing this');
    return false;
  }
};
