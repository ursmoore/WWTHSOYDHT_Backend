const { Router } = require("express");
const Location = require("../models/").location;
const Comment = require("../models/").comment;
const User = require("../models/").user;
const router = new Router();

router.get("/locations", async (req, res) => {
  try {
    const allLocation = await Location.findAll();
    res.status(200).send(allLocation);
  } catch (e) {
    console.log("error", e);
  }
});

router.get("/location/:id", async (req, res) => {
  try {
    const locationId = parseInt(req.params.id);
    const location = await Location.findByPk(locationId, {
      include: [Comment, User],
    });
    res.status(200).send(location);
  } catch (e) {
    console.log("e", e);
  }
});

module.exports = router;
