const celebritySchema = require("../models/celebrity");

const router = require("express").Router();

// all your routes here
router.get("/celebrities", (req, res, next) => {
  celebritySchema
    .find()
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/create");
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  celebritySchema
    .create({ name, occupation, catchPhrase })
    .then((celebrity) => {
      res.redirect("/celebrities");
      console.log("Name: " + celebrity.name);
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/create");
      next(error);
    });
});

module.exports = router;
