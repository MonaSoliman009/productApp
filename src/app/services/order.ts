import { ElementRef, Injectable } from '@angular/core';
import { from, fromEvent, interval, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Order {
  orderStauses = [
    "📦 Order Confirmed",
    "📦 Preparing",
    "📦 Out for delivery",
    // "",
    "📦 Delivered"
  ]


  getOrderStatus(): Observable<string> {
    return new Observable((observer) => {
      let counter = 0
      let interval = setInterval(() => {
        // observer.next()
        //observer.complete()
        //observer.error(err)
        if (counter == this.orderStauses.length) {
          observer.complete() //will stop the observable
        }
        if (this.orderStauses[counter] == "") {
          observer.error("error , status is empty") //will stop the observable
        }
        observer.next(this.orderStauses[counter])
        counter++

        // console.log("from inside interval");

      }, 2000)

      return {
        unsubscribe() {
          //complete , error , unsubscribe
          clearInterval(interval)
        }
      }
    })

  }

  getreadyObservable(ele:ElementRef) {
    //creation operators
    //  return of("mona","ali","Nour")
    // return from([1,2,3,4])
    // return from(new Promise((res, rej) => {
    //   setTimeout(() => {
    //     rej("error")
    //   }, 2000)
    // }))

    // return interval(1000)
    // return timer(2000)
    return fromEvent(ele.nativeElement,'click')
  }

}
