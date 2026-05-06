import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  constructor(){
   effect(()=>{
      console.log(this.counter());
   })
  }

  counter=signal<number>(0)
  doubleCounter=computed(()=>this.counter()*2)

  increaseCounter(){
    // this.counter.set(this.counter()+1)
    this.counter.update((counter)=>counter+1)
    // console.log(this.counter());

  }

  decreaseCounter(){
    this.counter.update((counter)=>counter-1)
  }

}
