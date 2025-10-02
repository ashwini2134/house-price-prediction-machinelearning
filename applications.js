const express = require("express");
const router = express.Router();

// Example: get all applications
router.get("/", (req, res) => {
  res.json({ message: "Applications route working" });
});

module.exports = router;
