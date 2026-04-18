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

dotenv.config()

const port = process.env.PORT || 5000

// Update allowed origins to include any Vercel deployment URL
const allowedOrigins = [
  "https://muroui.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
  /\.vercel\.app$/ // This allows all your Vercel preview/production links
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

// Root route for testing if backend is alive
app.get("/", (req, res) => {
  res.send("Muro API is running...")
})

// CRITICAL: Connect DB before exporting (Vercel specific)
connectDb()

// Only listen if NOT running on Vercel (local development)
if (process.env.NODE_ENV !== 'production') {
  server.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
}

// Export the app for Vercel's serverless handler
export default app