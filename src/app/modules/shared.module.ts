import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoutButtonComponent } from '../shared/components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LogoutButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    LogoutButtonComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
