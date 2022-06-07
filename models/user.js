const mongoose = require("mongoose");
const validator = require("validator");

const useSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    uniquetrue,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: [validator.isEmail, "Email must be an email"],
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date().toISOString,
  },
  update_at: {
    type: Date,
    default: new Date().toISOString,
  },
});

module.exports = mongoose.model("User", userSchema);
