import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  authService = inject(Auth)
  isLoggedIn: boolean = false

  ngOnInit(): void {
    //  this.isLoggedIn=this.authService.isLoggedIn()
    this.authService.isLoggedIn().subscribe({
      next: (val) => { this.isLoggedIn = val }
    })
  }
  login() {
    this.authService.login("mona", "123456")
  }

  logout() {
    this.authService.logout()
  }
}
