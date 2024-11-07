import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { LandingPage } from './pages/landing/landing.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';

const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'profile', component: UserProfilePage },
  { path: 'dashboard', component: DashboardPage },
  { path: '**', redirectTo: '' } // Catch-all for undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
