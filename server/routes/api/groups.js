const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");

router.get("/", async (req, res) => {
  const groups = await Group.query();
  res.json(groups);
});

module.exports = router;
