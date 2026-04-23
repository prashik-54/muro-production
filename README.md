# 🚀 Muro – Full Stack Social Media Platform

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-brightgreen)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-black)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Project-Live-success)

---

## 🌐 Live Demo

👉 **Try it here:** https://muro-production.onrender.com

---

## 📌 About Muro

Muro is a **full-stack social media platform** built using the **MERN stack** with real-time capabilities powered by Socket.io.  
It enables users to connect, share content, and communicate instantly—just like modern social platforms 🚀

---

## ✨ Features

🔐 **Authentication**
- Secure signup/login with JWT
- Protected routes & session handling  

📰 **Dynamic Feed**
- Create, like, and comment on posts  
- Personalized timeline  

📸 **Stories & Loops**
- 24-hour disappearing stories  
- Short video content (Loops)  

💬 **Real-time Messaging**
- One-on-one instant chat  
- Online/offline status tracking  

🔔 **Notifications**
- Real-time alerts for likes, comments, followers  

👤 **Profile Management**
- Edit profile & avatar  
- Followers / Following system  

📤 **Media Uploads**
- Image & video upload via Cloudinary + Multer  

---

## 🧠 Tech Stack

### 🎨 Frontend
- ⚛️ React (Vite)
- 🗂️ Redux Toolkit
- 🔀 React Router

### ⚙️ Backend
- 🟢 Node.js + Express.js
- 🍃 MongoDB + Mongoose
- 🔄 Socket.io (Real-time)
- ☁️ Cloudinary + Multer
- 🔐 JWT Authentication

---

## 🛠️ Installation & Setup

### 📋 Prerequisites
- Node.js
- MongoDB (Local / Atlas)
- Cloudinary Account

---

### 🔽 Clone Repository
```bash
git clone https://github.com/yourusername/muro.git
cd muro
```

---

### ⚙️ Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in Backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_custom_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run backend:

```bash
npm run dev
```

---

### 🎨 Frontend Setup
```bash
cd frontend
npm install
```

Run frontend:

```bash
npm run dev
```

---

## 📂 Project Structure

```
/backend   → APIs, Models, Controllers, Middleware, Socket config  
/frontend  → React app, Redux store, Pages, Components  
```

---

## 🎯 Key Highlights

✔️ Full-stack MERN project  
✔️ Real-time communication using Socket.io  
✔️ Scalable architecture with Redux state management  
✔️ Secure authentication system (JWT)  
✔️ Media handling with Cloudinary  
✔️ Production deployment (Render)  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub — it helps!