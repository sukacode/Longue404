const mongoose = require("mongoose");
const { isEmail } = require("validator");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: [isEmail, "Email must be an email"],
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date().toISOString(),
  },
  update_at: {
    type: Date,
    default: new Date().toISOString(),
  },
});

module.exports = mongoose.model("User", userSchema);
