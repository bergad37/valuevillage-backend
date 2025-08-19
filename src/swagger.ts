

import type { OpenAPIV3 } from 'openapi-types';
import { usersPaths } from './swagger/users';
import { authPaths } from './swagger/auth';

const swaggerDocument: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'ValueVillage API',
    version: '1.0.0',
    description: 'API documentation for ValueVillage backend',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  paths: {
    ...usersPaths,
    ...authPaths,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
          roleId: { type: 'string', format: 'uuid' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
        required: ['id', 'name', 'email', 'password', 'roleId', 'createdAt', 'updatedAt'],
      },
    },
  },
  tags: [
    { name: 'User', description: 'User management' },
    { name: 'Auth', description: 'Authentication' },
  ],
};

export default swaggerDocument;
