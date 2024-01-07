# 🚀 Light Backend Starterpack

#### This project is a lightweight boilerplate, crafted to kick-start GraphQL API projects using TypeScript, TypeORM, GraphQL, Apollo Server, and Type-GraphQL. It's a robust and flexible foundation, ideal for swiftly building backend applications with some cool tech! 🌐🔧

##### On this project : 
- simple book crud example
- basic JWT authentication (SignUp and Login)
- custom decorator example to protect resolver

## 📋 Prerequisites

Make sure you have Node.js installed on your machine to use this app. 🌲

## 🛠 Installation

1.  **Clone the Project**

    `git clone https://github.com/096benjaminbenoit/backend-boilerplate`

2.  **Install Dependencies**

    `npm install`

3.  **Configure Environment**

    - Create a `.env` file at the root of the project based on .env.example.
    - Add the necessary environment variables (for your database connection and jwt secret key.). 🔑

4.  **Start the Application**
    `npm start` 

**Go to your http://localhost/4000 to access into apollo sandox, ET VOILA 🔥**


## 📁 Project Structure

The project structure is deliberately simple, but there's nothing to stop you adding to it as you see fit!

```bash
├── src
│   ├── database
│   │   └── DataSource.ts // database connection
│   ├── entities // all entities
│   │   ├── Book.ts
│   │   └── User.ts
│   ├── inputs // all inputs/dto
│   │   ├── BookInput.ts
│   │   ├── LoginInput.ts
│   │   └── UserInput.ts
│   ├── resolvers
│   │   ├── BookResolver.ts // a resolver example with CRUD
│   │   └── UserResolver.ts // user management (signUp, login, ...)
│   ├── types
│   │   └── interfaces.ts // all interfaces
│   └── utils
│       ├── auth.ts // password management and user authentication
│       ├── jwt.ts // jwt management
│       └── security.ts // custom decorators to protect resolvers
└── index.ts
```

### Make with love ❤️
