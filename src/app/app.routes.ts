import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Login } from './components/login/login';
import { Order } from './components/order/order';
import { NotFound } from './components/not-found/not-found';
import { Info } from './components/info/info';
import { Reviews } from './components/reviews/reviews';
import { AppLayout } from './components/app-layout/app-layout';
import { Details } from './components/details/details';
import { authGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
  //first match wins
  {
    path: '', component: AppLayout,
     children: [
      // {path:'',component:Home},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home, title: 'Home' },

      {
        path: 'about-us', component: AboutUs, title: 'About us',
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: Info },
          { path: 'reviews', component: Reviews }
        ]
      },
      { path: 'order', component: Order, title: 'Order page',canActivate:[authGuard] },

      {path:"details/:id",component:Details},
        { path: 'login', component: Login, title: 'Login page' },

    ]
  }
  ,


  //wild card route
  { path: '**', component: NotFound }
];
/*
/  >> /home

/login
/order/login
/

*/
