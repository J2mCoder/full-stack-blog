const express = require("express")
const router = express.Router()
const cors = require("cors")
const controller = require("../controllers/controllerUser")

const corsOptions = {
    origin: 'http://localhost:5173/register',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post("/api/register", cors(corsOptions), controller.register)
router.post("/api/create-post", controller.createPost)

router.get("/api/register", (req, res) => {
    res.json({ message: "Inscription reussie" })
})

module.exports = router
