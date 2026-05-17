import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  apiUrl=`${environment.baseUrl}/products`

  httpClient=inject(HttpClient)

  getAllProducts():Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>(this.apiUrl,
  //   { ///products?catId=1
  //   headers:{
  //     'Authorization':'Bearer kjdhfkerjhjf;l'
  //   },
  //   params:{
  //     catId:1
  //   }
  //  }
  )
  }

  getProductById(id:string):Observable<IProduct>{
   return this.httpClient.get<IProduct>(`${this.apiUrl}/${id}`)
  }

  getProductsByCatId(catId:string):Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>(`${this.apiUrl}?catId=${catId}`
  //   ,{
  //   params:{
  //     catId:catId
  //   }
  //  }
  )
  }

  addNewProduct(prd:IProduct):Observable<IProduct>{
   return this.httpClient.post<IProduct>(this.apiUrl,JSON.stringify(prd),{
    headers:{
      'content-type':'application/json'
    }
   })
  }

  updateProduct(prdId:string,prd:IProduct):Observable<IProduct>{
  return this.httpClient.patch<IProduct>(`${this.apiUrl}/${prdId}`,JSON.stringify(prd))
  }

  deleteProduct(id:string):Observable<IProduct>{
   return this.httpClient.delete<IProduct>(`${this.apiUrl}/${id}`)
  }
}
