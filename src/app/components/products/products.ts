import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';

@Component({
  selector: 'app-products',//directive
  imports: [FormsModule, Highlight, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe,
    DatePipe, JsonPipe, ShortenPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products  implements OnChanges{
  @Input('sentSelectedCatId') recievedCatId:number=0
  //1-define the event
 @Output() onOrderPriceChanged:EventEmitter<number>=new EventEmitter<number>()

  totalOrderPrice: number = 0
  cardClass = "col"
  d: Date = new Date()
  products: IProduct[] = [
    {
      id: 1,
      name: "Laptop",
      imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",
      price: 1200,
      quantity: 10,
      catId: 1
    },
    {
      id: 2,
      name: "Mouse",
      imgUrl: "https://picsum.photos/200?random=2",
      price: 25,
      quantity: 0,
      catId: 1
    },

    {
      id: 3,
      name: "T-Shirt",
      imgUrl: "https://picsum.photos/200?random=3",
      price: 30,
      quantity: 1,
      catId: 2
    },
    {
      id: 4,
      name: "Jeans",
      imgUrl: "https://picsum.photos/200?random=4",
      price: 70,
      quantity: 25,
      catId: 2
    },

    {
      id: 5,
      name: "Coffee Mug",
      imgUrl: "https://picsum.photos/200?random=5",
      price: 12,
      quantity: 0,
      catId: 3
    },
    {
      id: 6,
      name: "Notebook",
      imgUrl: "https://picsum.photos/200?random=6",
      price: 8,
      quantity: 100,
      catId: 3
    }
  ];
  filteredProducts = this.products



  // constructor(){//dependency injection
  //  this.products=
  // }

  // ngOnInit(){}
  buy(price: number, quantity: string, evt: MouseEvent) {
    this.totalOrderPrice += price * +quantity
    //2- fire the event
    this.onOrderPriceChanged.emit(this.totalOrderPrice)
  }

  ngOnChanges(): void {
    this.filterProducts()
  }
  filterProducts() {
    if(this.recievedCatId==0){
      this.filteredProducts=this.products
      return;
    }
   this.filteredProducts=this.products.filter((prd)=>prd.catId==this.recievedCatId)
  }
}
