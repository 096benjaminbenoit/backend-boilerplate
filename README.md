# 🚀 Backend Starter Pack

#### This project is a lightweight boilerplate, crafted to kick-start GraphQL API projects using TypeScript, TypeORM, PostgreSQL, GraphQL, Apollo Server, Type-GraphQL, and Docker. It's a robust and flexible foundation, ideal for swiftly building backend applications with some cool tech! 🌐🔧

##### In this project:
- Simple book CRUD example
- Basic JWT authentication (SignUp and Login)
- Custom decorator example to protect resolver
- Script to reset database and create data fixtures

## 📋 Prerequisites

Make sure you have Node.js and/or Docker installed on your machine to use this app.

## 🐳 Installation with Docker

1. Clone the Project
    `git clone https://github.com/096benjaminbenoit/backend-boilerplate`
    <br>

2. Start the application in a Docker container
    `docker compose up`
    <br>

**Go to http://localhost:4000 to access the Apollo Sandbox, ET VOILA 🔥**

## 🛠 Installation without Docker

1.  **Clone the Project**

    `git clone https://github.com/096benjaminbenoit/backend-boilerplate`
    <br>

2.  **Install Dependencies**
    `npm install`
    <br>

3.  **Configure Environment**
    - Create a `.env` file at the root of the project based on `.env.example`.
    - Add the necessary environment variables (for your database connection and JWT secret key). 🔑
    <br>

4.  **Start the Application**
    `npm start`

**Go to http://localhost:4000 to access the Apollo Sandbox, ET VOILA 🔥**

## 🔄 To reset database and create data fixtures
Simply type this command (in terminal or in Docker shell):
`npm run resetDB`

_You can add some data fixtures by modifying the `resetDb.ts` file._

## 📁 Project Structure

The project structure is deliberately simple, but there's nothing to stop you from adding to it as you see fit!

```bash
├── src
│   ├── database
│   │   └── DataSource.ts // Database connection
│   ├── entities // All entities
│   │   ├── Book.ts
│   │   └── User.ts
│   ├── inputs // All inputs/dto
│   │   ├── BookInput.ts
│   │   ├── LoginInput.ts
│   │   └── UserInput.ts
│   ├── resolvers
│   │   ├── BookResolver.ts // A resolver example with CRUD
│   │   └── UserResolver.ts // User management (SignUp, Login, ...)
│   ├── types
│   │   └── interfaces.ts // All interfaces
│   └── utils
│       ├── auth.ts // Password management and user authentication
│       ├── jwt.ts // JWT management
│       └── security.ts // Custom decorators to protect resolvers
├── env.ts
├── index.ts
└── resetDb.ts // Little script to reset database and create data fixtures
```

Made with love ❤️