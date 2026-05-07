import { Component, effect, EventEmitter, inject, input, Input, OnChanges, output, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { StaticProducts } from '../../services/static-products';

@Component({
  selector: 'app-products',//directive
  imports: [FormsModule, Highlight, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe,
    DatePipe, JsonPipe, ShortenPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // @Input('sentSelectedCatId') recievedCatId:number=0
  sentSelectedCatId = input<number>(0)
  //1-define the event
  // @Output() onOrderPriceChanged: EventEmitter<number> = new EventEmitter<number>()
  onOrderPriceChanged = output<number>()
  totalOrderPrice: number = 0
  cardClass = "col"
  d: Date = new Date()
  products: IProduct[];
  filteredProducts: IProduct[];
  private staticProductsService = inject(StaticProducts)

  // constructor(private staticProductsService:StaticProducts) {
  constructor() {

    this.products = this.staticProductsService.getAllProducts()
    this.filteredProducts = this.products
    effect(() => {
      this.filteredProducts = this.staticProductsService.getProductsByCatId(this.sentSelectedCatId())
    })
  }

  // constructor(){//dependency injection
  //  this.products=
  // }

  // ngOnInit(){}
  buy(price: number, quantity: string, evt: MouseEvent) {
    this.totalOrderPrice += price * +quantity
    //2- fire the event
    this.onOrderPriceChanged.emit(this.totalOrderPrice)
  }

  // ngOnChanges(): void {
  //   this.filterProducts()
  // }

}
