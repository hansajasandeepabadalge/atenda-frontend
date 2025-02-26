import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private readonly storageKey = 'edu_manager_user';

  constructor() {
    // Check if user is already logged in
    const storedUser = localStorage.getItem(this.storageKey);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  login(request: LoginRequest): Observable<User> {
    // This is a mock implementation - would be replaced with a real API call
    const user: User = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: request.email,
      role: 'admin',
      createdAt: new Date()
    };

    return of(user).pipe(
      delay(800), // Simulate network delay
      tap(user => {
        this.currentUser = user;
        if (request.rememberMe) {
          localStorage.setItem(this.storageKey, JSON.stringify(user));
        } else {
          sessionStorage.setItem(this.storageKey, JSON.stringify(user));
        }
      })
    );
  }

  register(request: RegisterRequest): Observable<User> {
    // This is a mock implementation - would be replaced with a real API call
    const user: User = {
      id: 1,
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      role: request.role,
      createdAt: new Date()
    };

    return of(user).pipe(
      delay(800), // Simulate network delay
      tap(user => {
        this.currentUser = user;
        localStorage.setItem(this.storageKey, JSON.stringify(user));
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.storageKey);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
