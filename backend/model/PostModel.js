const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorID: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    length: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  dateUpdate: {
    type: Date,
    default: null,
  },
})

module.exports = mongoose.model("Post", postSchema)
