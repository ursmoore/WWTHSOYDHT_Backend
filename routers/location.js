const { Router } = require("express");
const req = require("express/lib/request");
const Location = require("../models/").location;
const Comment = require("../models/").comment;
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/locations", async (req, res) => {
  try {
    const allLocation = await Location.findAll({ include: User });
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

//SECOND ID WITHOUT COMMENT

/* router.get("/location/:id", async (req, res) => {
  const locationId = parseInt(req.params.id);
  const location = await Location.findByPk(locationId, { include: User });
  res.status(200).send(location);
});
 */

router.patch("/location/:id", async (req, res) => {
  const location = await Location.findByPk(req.params.id);
  const { dislikes } = req.body;
  await location.update({ dislikes });
  return res.status(200).send({ dislikes });
});

router.post("/locations", authMiddleware, async (req, res) => {
  const { name, image, description, latitude, longtitude, experience } =
    req.body;
  const userId = req.user.id;

  const newPost = await Location.create({
    userId: userId,
    name,
    image,
    description,
    latitude,
    longtitude,
    experience,
    dislikes: 0,
  });

  return res.status(200).send({ newPost });
});

//POST COMMENT
router.post("/comment", authMiddleware, async (req, res) => {
  const authHeader = req.headers["authorization"];
  const { userId } = toData(authHeader.replace("Bearer ", ""));
  try {
    const oneUser = await User.findByPk(userId);

    // get request body
    const { text, locationId } = req.body;
    if (!oneUser || !text) {
      return res.status(400).send("No user or comment provided");
    }

    // Go to DB and create new comment with params
    const newComment = await Comment.create({
      text,
      userId,
      locationId,
      userName: oneUser.name,
    });
    // Send new user back
    res.send(newComment);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
