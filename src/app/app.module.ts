import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from '../app/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule,
    SharedModule,

  ],
  exports: [RouterModule, RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule {}
