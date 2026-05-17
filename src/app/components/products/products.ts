import { Component, effect, EventEmitter, inject, input, Input, OnChanges, OnInit, output, Output, signal, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { StaticProducts } from '../../services/static-products';
import { Router, RouterLink } from '@angular/router';
import { ProductsApi } from '../../services/products-api';
import { Base } from '../../services/base';
import { single } from 'rxjs';

@Component({
  selector: 'app-products',//directive
  imports: [FormsModule, Highlight, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe,
    DatePipe, JsonPipe, ShortenPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  sentSelectedCatId = input<number>(0)
  onOrderPriceChanged = output<number>()
  totalOrderPrice: number = 0
  cardClass = "col"
  d: Date = new Date()
  products=signal<IProduct[]>([]);
  filteredProducts=signal<IProduct[]>([]);
  private productsApiService = inject(ProductsApi)
  baseService=inject(Base)
  private router = inject(Router)
  isLoading=signal<boolean>(false)
  constructor() {
    effect(() => {
      this.productsApiService.getProductsByCatId(String(this.sentSelectedCatId())).subscribe((res)=>{
       this.filteredProducts.set(res)
      })
    })
  }

  ngOnInit(): void {
    this.productsApiService.getAllProducts().subscribe({
      next:(res)=>{
       this.products.set(res)
      this.filteredProducts.set(res)
      }
    })


    this.baseService.getLoaderStatus().subscribe((val)=>{
      this.isLoading.set(val)
    })
  }


  buy(price: number, quantity: string, evt: MouseEvent) {
    this.totalOrderPrice += price * +quantity
    //2- fire the event
    this.onOrderPriceChanged.emit(this.totalOrderPrice)
  }
}
