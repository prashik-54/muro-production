import http from "http"
import express from "express"
import { Server } from "socket.io"
const app = express()
const server = http.createServer(app)

const socketOrigins = process.env.SOCKET_ORIGINS
  ? process.env.SOCKET_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
  : [
      "https://muroui.onrender.com",
      "https://muro-frontend.onrender.com",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://localhost:3000",
      "http://127.0.0.1:3000"
    ]

const io = new Server(server, {
  cors: {
    origin: socketOrigins,
    methods: ["GET", "POST"]
  }
})

const userSocketMap = {}

export const getSocketId = (receiverId) => {
  return userSocketMap[receiverId]
}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId
  if (userId != undefined) {
    userSocketMap[userId] = socket.id
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap))

  socket.on("disconnect", () => {
    delete userSocketMap[userId]
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
  })
})

export { app, io, server }
