const res = require("express/lib/response");
const UserController = require("../controllers/userController");
const router = require("express").Router();

router.route("/api/v1").get((req, res) => {
  res.send("Connected !");
});

router.route("/api/v1/register").post(UserController.register);

module.exports = router;
