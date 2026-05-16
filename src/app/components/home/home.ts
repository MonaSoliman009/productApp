import { Component, effect, ElementRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { ICourse } from '../../models/icourse.model';
import { Order } from '../../services/order';
import { filter, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  course: ICourse = {
    name: 'Angular course',
    description: 'This is a course about Angular',
    imgUrl: "https://placehold.co/600x400",
    instructor: 'John Doe'
  }

  private orderService = inject(Order)
  header = viewChild<ElementRef>('header')
  subscription!: Subscription

  constructor() {
    effect(() => {
      let headerElement = this.header()
      if (headerElement) {
        this.orderService.getreadyObservable(headerElement).subscribe({
          next: (evt) => { console.log("subscriber 1",evt) },
          complete: () => {
            console.log("completed");
          },
          error: (err) => {
            console.log(err);
          }
        })

        setTimeout(()=>{
    this.orderService.getreadyObservable(headerElement).subscribe({
          next: (evt) => { console.log("subscriber 2",evt) },
          complete: () => {
            console.log("completed");
          },
          error: (err) => {
            console.log(err);
          }
        })
        },5000)
      }
    })
  }
  ngOnInit(): void {
    //  this.orderService.getOrderStatus().subscribe((status)=>{
    //   console.log("status "+status);

    //  },(err)=>{
    //    console.log("error "+ err);

    //  },()=>{
    //    console.log("complete");

    //  })


    //  this.subscription= this.orderService.getOrderStatus().pipe(
    //   // filter((status)=>status.includes('deliver')),
    //   // map((status)=>status + "....."),
    //   // tap(()=>{console.log("new status.");})
    // ).subscribe({
    //     next: (status) => {
    //       console.log(status);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log("complete");
    //     }
    //   })



  // setTimeout(()=>{
  //    this.subscription= this.orderService.getOrderStatus().subscribe({
  //       next: (status) => {
  //         console.log(status);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log("complete");
  //       }
  //     })
  // },3000)



    // this.orderService.getreadyObservable().subscribe({
    //   next:(name)=>{console.log(name)},
    //   complete:()=>{console.log("completed");
    //   },
    //   error:(err)=>{console.log(err);
    //   }
    // })

  }





  displayMsg(): string {
    return "Hello world"
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }

}
