import { Component, inject, OnInit, signal } from '@angular/core';
import { CategoriesApi } from '../../services/categories-api';
import { ICategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ProductsApi } from '../../services/products-api';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,JsonPipe],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit{
  categoriesApiService=inject(CategoriesApi)
  productsApiService=inject(ProductsApi)
  categories=signal<ICategory[]>([])
  product:IProduct={} as IProduct;
  ngOnInit(): void {
    this.categoriesApiService.getAllCategories().subscribe((res)=>{
     this.categories.set(res)
    })
  }


  addnewProduct(){
    console.log("save new prd");

   this.productsApiService.addNewProduct(this.product).subscribe({
    next:(res)=>{console.log(res);/**navigate to the products list */},
    error:(err)=>{console.log(err);
    }
   })
  }

}
