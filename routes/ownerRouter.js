const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const ownerModel = require("../models/owner-model.js");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res
        .status(503)
        .send("you don't have permission to create an owner");
    }
    try {
      let { fullName, email, password } = req.body;
      let createdOwner = await ownerModel.create({
        fullName,
        email,
        password,
      });
      res.status(200).send(createdOwner);
    } catch (error) { console.log(error.message) }
  });
}
router.get("/", function (req, res) {
  res.send("hey it's working");
});

module.exports = router;
