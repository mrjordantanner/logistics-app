import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPage } from '../pages/landing/landing.page';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
