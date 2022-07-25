const user = require("../models/user");
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
        message: "Succesfully Register",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async findAllUser(req, res) {
    try {
      const data = await User.find({}).exec();

      return res
        .status(200)
        .json({ data: data, message: "success GET users", status: "success" });
    } catch (error) {
      console.log(error);
    }
  }

  static async findById(req, res) {
    try {
      const id = req.params.id;

      const data = await User.findById(id).exec();

      return res.status(200).json({
        data: data,
        message: "success Get user by id",
        status: success,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUser(req, res) {
    try {
      // cari By id
      // cari data yang dicari, itu baru di update
      // di save

      const id = req.params.id;
      const data = await User.findById(id).exec();

      // update data
      data["usernmae"] = req.body.username ? req.body.username : data.username;
      data["email"] = req.body.email ? req.body.email : data.email;
      data["updated_at"] = new Date().toISOString;

      const updatedData = await data.save();

      return res.status(200).json({
        data: updatedData,
        message: "success update user",
        status: "success,",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const is = req.params.id;
      const data = await user.findById(id).exec();

      const deleted = await data.remove();

      return res.status(200).json({
        data: deleted,
        message: "success delete user",
        status: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
