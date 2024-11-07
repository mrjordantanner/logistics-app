import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonComponent } from '../shared/components/button/button.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPage } from '../pages/landing/landing.page';
import { LoginComponent } from './components/login/login.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardPage } from '../pages/dashboard/dashboard.page';

@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    LandingPage,
    LoginComponent,
    DashboardPage,
    CounterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule, 
    ReactiveFormsModule,
  ],
  exports: [
    AppRoutingModule,
    ButtonComponent, 
    NavbarComponent
  ]
})
export class SharedModule {}
