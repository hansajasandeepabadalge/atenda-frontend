export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: 'admin' | 'teacher' | 'student';
  createdAt?: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'admin' | 'teacher' | 'student';
}
