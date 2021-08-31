const { Router } = require("express");
const router = Router();

const {
    error404,
    home,
    zyrapp,
    descubre,
    pucvdad,
    proximamente,
} = require("../controllers/page");

router.get("/", home);
router.get("/zyrapp", zyrapp);
router.get("/descubrespa", descubre);
router.get("/pucvdad", pucvdad);
router.get("/proximamente", proximamente);

router.get("*", error404);

module.exports = router;