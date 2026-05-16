import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
 let authService=inject(Auth)
 let router=inject(Router)
 let isLoggedin:boolean=false

 authService.isLoggedIn().subscribe((val)=>{
  isLoggedin=val
 })

 if(!isLoggedin){
  router.navigateByUrl('/login');
  return false
 }
 return isLoggedin
};
