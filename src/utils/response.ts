export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  message: string;
  data?: T;
}

export function success<T>(message: string, data?: T): ApiResponse<T> {
  return {
    status: 'success',
    message,
    data,
  };
}

export function error(message: string, data?: any): ApiResponse {
  return {
    status: 'error',
    message,
    data,
  };
}
