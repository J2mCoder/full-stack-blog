const User = require("../model/UserModel")
const Post = require("../model/PostModel")
const newUser = require("../middleware/RegisterUser")
const postUser = require("../middleware/PostUser")

exports.register = async (req, res) => {
  res.json({ message: "Inscription reussie" })
}

exports.createPost = async (req, res) => {
  try {
    const user = await User.find()
    const { title, description, image, category } = req.body
    const authorID = user[0]._id
    const post = await postUser(title, description, authorID, image, category)
    res.json(post)
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du post" })
  }
}
