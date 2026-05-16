import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  router = inject(Router)
  id: string = ''
  product = signal<IProduct|null>(null)
  ngOnInit(): void {
    // this.id = this.activateRoute.snapshot.params['id']
    this.activateRoute.params.subscribe((params) => {
      this.id = params["id"]
      this.product.set(this.staticProductsService.getProductById(+this.id))

    })
  }

  changeParamId() {
    this.router.navigateByUrl('/details/4')
  }
}
