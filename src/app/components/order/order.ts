import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";

@Component({
  selector: 'app-order',
  imports: [FormsModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId: number = 0
  orderPrice: number = 0
  categories: ICategory[] = [
    {
      id: 1,
      name: "Electronics"
    },
    {
      id: 2,
      name: "Clothing"
    },
    {
      id: 3,
      name: "Stationery"
    }
  ];
  setOrderPrice(recievedTotalPrice:number) {
   this.orderPrice=recievedTotalPrice
  }
}
