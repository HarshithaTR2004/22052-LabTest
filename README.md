# Book Review App

## Overview

The **Book Review App** is a full-stack web application that allows users to:

* Register and login using **JWT authentication**
* Add, view, and manage books with reviews
* Store data in **MongoDB**
* Serve the frontend with **React** and backend with **Node.js + Express**
* Containerize the app using **Docker** and orchestrate using **docker-compose** (or Kubernetes for deployment)

This project demonstrates a **modern full-stack web development workflow** using popular technologies.

---

## Tech Stack

* **Frontend:** React, Axios, HTML, CSS
* **Backend:** Node.js, Express, Mongoose (MongoDB), JWT, bcrypt
* **Database:** MongoDB
* **Authentication:** JSON Web Tokens (JWT)
* **Containerization:** Docker (multi-stage builds for frontend + backend)
* **Orchestration:** Docker Compose (Kubernetes support optional)

---

## Features

* User registration and login with **JWT-based authentication**
* Add books with title, author, and review
* View list of all books
* Protected routes for logged-in users
* Dockerized frontend and backend for easy deployment
* Multi-container setup using **docker-compose**

---

## Project Structure

```
book-review-app/
├─ backend/
│  ├─ server.js           # Express server
│  ├─ routes/
│  │  ├─ auth.js          # Register/Login routes
│  │  └─ books.js         # CRUD for books
│  ├─ models/
│  │  ├─ User.js
│  │  └─ Book.js
│  ├─ package.json
│  └─ Dockerfile
├─ frontend/
│  ├─ public/
│  │  └─ index.html
│  ├─ src/
│  │  ├─ components/      # Login, Register, BookList, AddBook
│  │  ├─ App.js
│  │  ├─ index.js
│  │  └─ api.js            # Axios instance for backend API
│  ├─ package.json
│  └─ Dockerfile
├─ docker-compose.yml
└─ README.md
```

---

## How It Works

1. **Frontend (React):**

   * Handles routing between pages: Login, Register, Book List, Add Book.
   * Communicates with backend API using Axios.
   * Stores JWT token in `localStorage` for authenticated requests.

2. **Backend (Node.js + Express):**

   * Provides REST API endpoints for authentication and book management.
   * Secures protected routes using JWT verification.
   * Uses MongoDB for persistent data storage.

3. **Docker & Docker Compose:**

   * Frontend and backend are containerized separately.
   * MongoDB runs in its own container.
   * `docker-compose up --build` launches all containers together.

---

## Running the App

### **Prerequisites**

* Docker & Docker Compose installed
* Optional: Node.js and npm for local development

### **Start with Docker**

1. From the project root:

```bash
docker-compose up --build
```

2. Access the app:

   * Frontend: `http://localhost:3000`
   * Backend API: `http://localhost:5000/api`

3. MongoDB runs in a container (default port 27017).

### **Local Development**

* **Backend:**

```bash
cd backend
npm install
npm run dev
```

* **Frontend:**

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file in the **backend** folder with:

```
PORT=5000
MONGO_URI=mongodb://mongo:27017/bookdb   # or local MongoDB URI
JWT_SECRET=your_jwt_secret
```

---

## Future Improvements

* Deploy using **Kubernetes** for scalable multi-container setup
* Add **user profiles and book ratings**
* Enhance UI with **Material-UI or TailwindCSS**
* Implement **unit tests** for backend API

---
