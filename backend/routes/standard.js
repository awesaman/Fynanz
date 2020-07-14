const router = require("express").Router();
let Standard = require("../models/standard.model");

router.route("/:id").get((req, res) => {
  Standard.findById(req.params.id)
    .then((page) => res.json(page))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
