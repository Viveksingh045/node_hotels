# Node Hotels Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)  
![License](https://img.shields.io/badge/License-MIT-blue)  

A lightweight **REST API** built with **Node.js + Express** for managing hotel guests and menu items.  
Includes authentication, MongoDB integration, and modular routes for easy scalability.

---
 

---

## 🚀 Features
- 🔑 **User authentication** (`auth.js`)  
- 🗄️ **MongoDB integration** (`db.js`)  
- 👤 **Person model** (`models/Person.js`)  
- 🍴 **Menu Items model** (`models/menuItems.js`)  
- 📡 **RESTful routes** for People & Menu management  

---

## 📂 Project Structure
```bash
node_hotels-main/
│── auth.js            # Authentication logic
│── db.js              # Database connection (MongoDB)
│── server.js          # Entry point of the application
│── package.json       # Dependencies and scripts
│
├── models/
│   ├── Person.js      # Schema for people
│   └── menuItems.js   # Schema for menu items
│
├── routes/
│   ├── personRoutes.js # Routes for managing people
│   └── menuroutes.js   # Routes for managing menu items
│
└── .gitignore

```
---

 ## Installation & Setup

Clone this repository:

git clone https://github.com/yourusername/node_hotels.git
cd node_hotels-main

---

## Install dependencies:

npm install

---

## Set up environment variables:
Create a .env file in the root and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000

---

## Run the server:

npm start


Or (for development with auto-reload):

npm run dev

---

## 📌 API Endpoints
Person Routes

GET /person → Get all people

POST /person → Add a new person

PUT /person/:id → Update a person

DELETE /person/:id → Remove a person

---

Menu Routes

GET /menu → Get all menu items

POST /menu → Add a new menu item

PUT /menu/:id → Update a menu item

DELETE /menu/:id → Remove a menu item

---

## 🛠️ Tech Stack

Node.js + Express.js

MongoDB (Mongoose ODM)

JWT Authentication

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.
