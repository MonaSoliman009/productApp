import { AfterViewInit, Component, ElementRef, inject, QueryList, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";
import { StaticCategories } from '../../services/static-categories';

@Component({
  selector: 'app-order',
  imports: [FormsModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit {
  selectedCatId: number = 0
  orderPrice: number = 0

  private staticCatService = inject(StaticCategories)
  categories: ICategory[] = this.staticCatService.getAllCategories()


  // constructor(private staticCatService:StaticCategories){
  // this.categories=this.staticCatService.getAllCategories()
  // }
  // @ViewChild('header') headerEle!: ElementRef
  headerEle = viewChild<ElementRef>('header')
  // @ViewChildren('header') headerElements!:QueryList<ElementRef>
  headerElements = viewChildren<ElementRef[]>('header')
  // @ViewChild(Products) productsCom!:Products

  setOrderPrice(recievedTotalPrice: number) {
    this.orderPrice = recievedTotalPrice
  }

  ngAfterViewInit(): void {
    console.log(this.headerEle());
    console.log(this.headerElements());
    // console.log(this.headerElements.get(1)?.nativeElement);
    //  console.log(this.productsCom.totalOrderPrice);

  }
}
