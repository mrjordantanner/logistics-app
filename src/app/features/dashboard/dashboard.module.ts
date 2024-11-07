import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.page';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule
  ],
  exports: [RouterModule, RouterOutlet]
})
export class DashboardModule {}
