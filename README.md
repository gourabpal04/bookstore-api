# 📚 Bookstore API

A secure and scalable RESTful API built with NestJS, Prisma, and PostgreSQL.

## 🚀 Features

- JWT Authentication (Signup/Login)
- CRUD operations on Books
- Filtering, Searching, Pagination, Sorting
- Global Error Handling
- Swagger Documentation
- Dockerized Setup
- E2E Testing

## 🛠 Tech Stack

- NestJS + TypeScript
- PostgreSQL + Prisma ORM
- JWT Authentication
- Docker & Docker Compose
- Swagger for API Docs

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api
```

### 2. Set up Environment Variables
```bash
cp .env.example .env
```
### 3. Start with Docker

```bash
docker-compose up --build
```

### 4. Run Migrations

```bash
npx prisma migrate dev --name init
```
### 5. Access API

```bash

API: http://localhost:3000

Swagger: http://localhost:3000/api
```

### ✅ API Endpoints
```bash

POST /auth/signup

POST /auth/login

GET /books

POST /books

GET /books/:id

PATCH /books/:id

DELETE /books/:id

Supports query filters: ?author=...&category=...&rating=...&search=...
```
### 🧪 Running Tests
```bash


npm run test:e2e
```
### 🐳 Docker Commands
```bash


docker-compose up --build
docker-compose down
```

### 📬 Contact

```bash
Feel free to reach out if you have any questions or feedback.

- LinkedIn: [Your LinkedIn Profile]([https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/gourab-pal-828078248/))

```
