import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';
import { UserModule } from './modules/user/user.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { provideStore } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { provideEffects } from '@ngrx/effects';
import { loadUsers$ } from './state/user/user.effects';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule, 
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    UserModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideStore({ user: userReducer }),
    provideEffects([loadUsers$]),  // Register functional effect
    provideAnimations(),
  ]
})
export class AppModule {}
