const express = require("express")
const { connectDB } = require("./db/connect_db")
require("dotenv").config()
const routes = require("./routes/routes")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(cors())

app.post("/", (req, res) => {
  res.json(req.body)
})

connectDB()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
