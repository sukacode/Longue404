const router = require("express").Router();
const UserController = require("../controllers/userController");
// const res = require("express/lib/response");

router.route("/api/v1").get((req, res) => {
  res.send("Connected !");
});

router.route("/api/v1/register").post(UserController.register);

router.route("/api/v1/users").get(UserController.findAllUser);

router.route("/api/v1/users/:id").get(UserController.findById);

module.exports = router;
