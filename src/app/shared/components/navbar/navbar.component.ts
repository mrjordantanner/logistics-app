import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})

export class NavbarComponent {
    constructor(public authService: AuthService) {}
 }