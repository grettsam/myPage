const { Router } = require("express");
const router = Router();

const {
    error404,
    home,
    zyrapp,
    emercorp,
    sushitaro,
} = require("../controllers/page");

router.get("/", home);
router.get("/zyrapp", zyrapp);
router.get("/descubrespa", emercorp);
router.get("/pucvdad", sushitaro);

router.get("*", error404);

module.exports = router;