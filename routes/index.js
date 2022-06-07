const res = require("express/lib/response");

const router = require("express").Router();

router.route("/api/v1").get((req, res) => {
  res.send("Connected !");
});

module.exports = router;
