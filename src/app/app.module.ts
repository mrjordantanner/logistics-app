import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';
import { UserModule } from './modules/user/user.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { StoreModule, provideStore, provideState  } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user/user.effects';
//import { userEffects } from './state/user/user.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ user: userReducer }),
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    UserModule,
  ],
  providers: [
    provideEffects(UserEffects),
    provideStore({ user: userReducer }),
    provideState({ name: 'user', reducer: userReducer }),
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
