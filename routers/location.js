const { Router } = require("express");
const Location = require("../models/").location;
const router = new Router();

router.get("/locations", async (req, res) => {
  try {
    const allLocation = await Location.findAll();
    res.status(200).send(allLocation);
  } catch (e) {
    console.log("error", e);
  }
});

module.exports = router;
