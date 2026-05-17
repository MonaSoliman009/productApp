import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Base {
 private isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)

 showLoader(){
  this.isLoading.next(true)
 }

 hideLoader(){
  this.isLoading.next(false)
 }

 getLoaderStatus():BehaviorSubject<boolean>{
  return this.isLoading
 }
}
