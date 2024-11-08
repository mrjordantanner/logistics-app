import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { LandingPage } from './pages/landing/landing.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { CreateUserPage } from './pages/create-user/create-user.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginPage },
  { path: 'profile', component: UserProfilePage },
  { path: 'create', component: CreateUserPage },
  { path: 'dashboard', component: DashboardPage },
  { path: '**', redirectTo: '' } // Catch-all for undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
