import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Products } from './components/products/products';
import { Counter } from "./components/counter/counter";
import { Order } from './components/order/order';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Products, Counter, Order, RouterOutlet],
  templateUrl: './app.html',
  // template:`<h1>Hello from ts file</h1>`,
  styleUrl: './app.css'
  // styles:[`h1{color:green}`]
})
export class App {
}
