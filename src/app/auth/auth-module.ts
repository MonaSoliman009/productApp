import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [Login],
  imports: [CommonModule,AuthRoutingModule],
  exports:[]
})
export class AuthModule {}
