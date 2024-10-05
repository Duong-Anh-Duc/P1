const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoute");
const { connectDB } = require("./config/db");
require("dotenv").config();
const app = express()
app.use(cors())
app.use(express.json())
connectDB()
app.use("/api/users", userRoutes)
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})