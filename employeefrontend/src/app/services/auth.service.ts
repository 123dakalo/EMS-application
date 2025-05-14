import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/employees'; // Update if needed

  constructor(private http: HttpClient) {}

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/login`, credentials);
  }
}
