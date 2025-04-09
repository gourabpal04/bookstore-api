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
2. Set up Environment Variables
bash
Copy
Edit
cp .env.example .env
3. Start with Docker
bash
Copy
Edit
docker-compose up --build
4. Run Migrations
bash
Copy
Edit
npx prisma migrate dev --name init
5. Access API
API: http://localhost:3000

Swagger: http://localhost:3000/api

✅ API Endpoints
POST /auth/signup

POST /auth/login

GET /books

POST /books

GET /books/:id

PATCH /books/:id

DELETE /books/:id

Supports query filters: ?author=...&category=...&rating=...&search=...

🧪 Running Tests
bash
Copy
Edit
npm run test:e2e
🐳 Docker Commands
bash
Copy
Edit
docker-compose up --build
docker-compose down
📬 Contact
Feel free to reach out if you have any questions or feedback.
