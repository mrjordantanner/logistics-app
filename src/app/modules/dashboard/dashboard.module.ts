import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardPage } from '../../pages/dashboard/dashboard.page';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    // CommonModule,
    // RouterModule, 
    // RouterOutlet
  ]
})
export class DashboardModule {}
