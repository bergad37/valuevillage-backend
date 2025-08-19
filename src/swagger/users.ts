import { OpenAPIV3 } from 'openapi-types';

export const usersPaths: OpenAPIV3.PathsObject = {
  '/users': {
    get: {
      summary: 'Get all users',
      tags: ['User'],
      security: [{ bearerAuth: [] }],
      responses: {
        '200': {
          description: 'A list of users',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/User' },
              },
            },
          },
        },
      },
    },
    post: {
      summary: 'Create a new user',
      tags: ['User'],
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/User' },
          },
        },
      },
      responses: {
        '201': {
          description: 'User created',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/User' },
            },
          },
        },
      },
    },
  },
};
