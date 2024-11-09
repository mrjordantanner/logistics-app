import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  handleLogout() {
    console.log("Button: HandleLogout()");
    this.authService.logout();
    this.snackBar.open('Successfully Logged Out', 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
    this.router.navigate(['/login']);
  }
}