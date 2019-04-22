const express = require("express");
const router = express.Router();
//LOgin page
router.get("/login", (req, res) => {
    res.render("login");
});

//LOgin page
router.get("/register", (req, res) => {
    res.render("register");
});

module.exports = router;
