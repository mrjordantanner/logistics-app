import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { CreateUserPage } from '../../pages/create-user/create-user.page';
import { UserProfilePage } from '../../pages/user-profile/user-profile.page';
import { LoginPage } from '../../pages/login/login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { MaterialModule } from '../material.module';
import { UserListComponent } from '../../shared/components/user-list/user-list.component';
import { LandingPage } from '../../pages/landing/landing.page';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../../state/user/user.effects';
import { StoreModule, provideStore, provideState  } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { userReducer } from '../../state/user/user.reducer';

@NgModule({
  declarations: [
    CreateUserPage, 
    UserProfilePage, 
    LoginPage, 
    UserListComponent, 
    LandingPage
  ],
  imports: [
    //EffectsModule.forFeature([UserEffects]),
    //StoreModule.forFeature({ user: userReducer }),
    CommonModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [RouterModule, RouterOutlet],
  // providers: [
  //   provideEffects(UserEffects),
  //   provideStore({ user: userReducer }),
  //   provideState({ name: 'user', reducer: userReducer }),
  //   provideAnimations(),
  // ],
})
export class UserModule {}
