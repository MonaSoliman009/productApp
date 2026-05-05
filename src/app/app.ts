import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer,Products  ],
  templateUrl: './app.html',
  // template:`<h1>Hello from ts file</h1>`,
  styleUrl: './app.css'
  // styles:[`h1{color:green}`]
})
export class App {
}
