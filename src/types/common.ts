export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  roleId: string;
  createdAt: string;
  updatedAt: string;
}
