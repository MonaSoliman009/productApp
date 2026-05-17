import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { Base } from '../services/base';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  let baseService=inject(Base)
  let modifiedReq =req.clone({
    setHeaders:{
      Authorization:"mnvhgcdgchmbk.,m"
    }
  })

  baseService.showLoader()


  return next(modifiedReq).pipe(
    tap((event:HttpEvent<unknown>)=>{
        if(event instanceof HttpResponse){
         baseService.hideLoader()
        }
    })
  );
};
