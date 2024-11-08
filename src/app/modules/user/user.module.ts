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

@NgModule({
  declarations: [CreateUserPage, UserProfilePage, LoginPage, UserListComponent, LandingPage],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [RouterModule, RouterOutlet]
})
export class UserModule {}
