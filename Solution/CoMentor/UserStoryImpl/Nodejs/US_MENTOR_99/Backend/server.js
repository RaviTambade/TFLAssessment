const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

// ================= DB =================
const Connection = require("./connectivity/db")

// ================= USER MODULE =================
const UserRepository = require("./repositories/userProfileRepository")
const ProfileService = require("./services/userProfileService")
const UpdateProfileController = require("./controllers/userProfileController")
const userRouterFactory = require("./routers/userProfileRoutes")

const userRepo = UserRepository
const userService = new ProfileService(userRepo)
const userController = new UpdateProfileController(userService)

// ================= EXPRESS APP =================
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/v1/profile", userRouterFactory(userController))

// Health check
app.get("/", (req, res) => {
  res.send("API is running...")
})

// Server
const PORT = 3898

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})