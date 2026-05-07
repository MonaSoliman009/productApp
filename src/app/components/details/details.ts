import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProducts } from '../../services/static-products';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private activateRoute = inject(ActivatedRoute)
  private staticProductsService: StaticProducts = inject(StaticProducts)
  id: string = ''
  product: IProduct | null = null
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.product = this.staticProductsService.getProductById(+this.id)
  }
}
