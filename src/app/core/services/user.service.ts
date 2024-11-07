import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:5000/api'
  private route = '/user';

  url = `${this.baseUrl}${this.route}`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  createUser(name: string, email: string, password: string, role: string): Observable<any> {
    const requestBody = {
      name, 
      email, 
      password, 
      role
    }
    return this.http.post(this.url, requestBody);
  }
}
