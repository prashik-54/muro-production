import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import loopRouter from "./routes/loop.routes.js"
import storyRouter from "./routes/story.routes.js"
import messageRouter from "./routes/message.routes.js"
import { app, server } from "./socket.js"
import path from "path"
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const port = process.env.PORT || 5000

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
  : [
      "https://muro-production.onrender.com",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://localhost:3000",
      "http://127.0.0.1:3000"
    ]

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)
app.use("/api/loop", loopRouter)
app.use("/api/story", storyRouter)
app.use("/api/message", messageRouter)

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')))

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

// Root route for testing if backend is alive
app.get("/", (req, res) => {
  res.send("Muro API is running...")
})

connectDb()

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
