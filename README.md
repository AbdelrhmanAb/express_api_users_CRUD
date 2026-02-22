# 🚀 Node.js CRUD Users API

A simple RESTful API built with **Node.js** and **Express** to perform CRUD operations on users.
This project demonstrates clean project structure, routing, validation, and controller separation.

---

## 📌 Features

* Create User
* Read All Users
* Read Single User
* Update User
* Delete User
* Request validation using express-validator
* Organized MVC-like structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* express-validator
* Nodemon (dev)

---

## 📂 Project Structure

```
project-root
│
├── app.js
├── routes
│   └── users.js
├── controler
│   └── controler.js
├── package.json
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/your-username/your-repo.git
```

Install dependencies:

```
npm install
```

Run the server:

```
npm start
```

Or with nodemon:

```
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Get All Users

```
GET /api/users
```

### 🔹 Get One User

```
GET /api/users/:id
```

### 🔹 Create User

```
POST /api/users
```

Body:

```
{
  "name": "Abdo",
  "age": 20
}
```

### 🔹 Update User

```
PATCH /api/users/:id
```

### 🔹 Delete User

```
DELETE /api/users/:id
```

---

## ✅ Validation Example

* Name must not be empty
* Name length ≥ 3
* Age must be provided

---

## 👨‍💻 Author

Abdo Ahmed

---

## ⭐ Future Improvements

* Database integration (MongoDB / PostgreSQL)
* Authentication (JWT)
* Pagination
* Docker support
* Unit testing

---
