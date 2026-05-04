import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer, Home ],
  templateUrl: './app.html',
  // template:`<h1>Hello from ts file</h1>`,
  styleUrl: './app.css'
  // styles:[`h1{color:green}`]
})
export class App {
}
