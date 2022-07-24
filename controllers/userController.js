const User = require("../models/user");

class UserController {
  static async register(req, res) {
    try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        password_confirm: req.body.password,
        username: req.body.username,
      });
      console.log(newUser);

      return res.status(201).json({
        data: newUser,
        status: "success",
        message: "Succesfully create User",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
