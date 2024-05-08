const Post = require("../model/PostModel")

const postUser = async (title, description, authorID, image, category = []) => {
  try {
    const post = await new Post({
      title,
      description,
      authorID,
      image,
      category,
    })
    await post.save()
    return post
  } catch (error) {
    console.log("Erreur lors de la création du post :", error.message)
    throw new Error("Erreur lors de la création du post")
  }
}

module.exports = postUser
