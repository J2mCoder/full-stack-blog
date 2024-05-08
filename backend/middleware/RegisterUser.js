const User = require("../model/UserModel")
const bcrypt = require("bcrypt")

const newUser = async ({ name, password, email }) => {
  try {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, salt)
    const user = new User({
      name,
      password: hash,
      email,
    })
    await user.save()
    return user
  } catch (error) {
    throw error
  }
}

module.exports = newUser
