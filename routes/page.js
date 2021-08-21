const { Router } = require("express");
const router = Router();
const path = require("path");

const { error404, home } = require("../controllers/page");

router.get("/", home);

router.get("*", error404);

module.exports = router;