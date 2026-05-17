import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, signal, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";
import { StaticCategories } from '../../services/static-categories';
import { CategoriesApi } from '../../services/categories-api';

@Component({
  selector: 'app-order',
  imports: [FormsModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  selectedCatId: number = 0
  orderPrice: number = 0
  private categoriesApiSer = inject(CategoriesApi)
  headerEle = viewChild<ElementRef>('header')
  headerElements = viewChildren<ElementRef[]>('header')
  categories=signal<ICategory[]>([])

  ngOnInit(): void {
    this.categoriesApiSer.getAllCategories().subscribe({
      next:(res)=>{
        this.categories.set(res)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  setOrderPrice(recievedTotalPrice: number) {
    this.orderPrice = recievedTotalPrice
  }
}
