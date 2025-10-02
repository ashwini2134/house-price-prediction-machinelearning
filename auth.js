const express = require("express");
const router = express.Router();

// Example: simple login route
router.post("/login", (req, res) => {
  res.json({ message: "Login route working" });
});

// Example: simple register route
router.post("/register", (req, res) => {
  res.json({ message: "Register route working" });
});

module.exports = router;
