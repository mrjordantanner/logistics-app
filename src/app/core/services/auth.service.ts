import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly authUrl = 'http://localhost:5017/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.authUrl, { email, password })
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            console.log("Logged in");
          }
        })
      );
  }

  logout(): void {
      localStorage.removeItem('token');
      console.log("Logged out");
  }

  // !! converts a non-falsy value to a 'true' boolean
  // Quick way to check if a token is present
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');   
  }

  getToken(): string | null {
      return localStorage.getItem('token');
  }
}
