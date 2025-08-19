# ValueVillage Backend

This is the backend API for ValueVillage, built with Node.js, Express, TypeScript, and Prisma ORM.

## Features

- User authentication with roles (admin, etc.)
- Property, blog, and content management
- PostgreSQL database with Prisma ORM
- Secure password hashing
- Seed script for admin user and roles

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory with the following:

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

### Database Setup

Generate the Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

### Seeding the Database

Seed the database with the default admin user and role:

```bash
npm run prisma:seed
```

### Development

Start the development server with hot-reloading:

```bash
npm run dev
```

### Production

Build and start the server:

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` — Start server in development mode (hot-reload)
- `npm run build` — Compile TypeScript
- `npm start` — Start server (compiled JS)
- `npm run prisma:generate` — Generate Prisma client
- `npm run prisma:migrate` — Run database migrations
- `npm run prisma:seed` — Seed the database

## Project Structure

```
prisma/           # Prisma schema, migrations, and seed script
src/              # Source code (controllers, routes, services)
generated/        # Generated Prisma client
.env              # Environment variables
```

## License

ISC
