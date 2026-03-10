/**
 * Redux Store Types
 *
 * Define your custom types here for type safety across the application
 */

// ==============================|| API RESPONSE TYPES ||============================== //

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ==============================|| EXAMPLE TYPES ||============================== //

export interface Example {
  id: string | number;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

// ==============================|| USER TYPES ||============================== //

export interface User {
  id: string | number;
  name: string;
  email: string;
  role?: string;
  avatar?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

// ==============================|| ERROR TYPES ||============================== //

export interface ApiError {
  status: number;
  data: {
    message: string;
    errors?: Record<string, string[]>;
  };
}
