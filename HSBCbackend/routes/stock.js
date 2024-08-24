const express = require("express");
const { getMystockPrices, getSuggestedStock } = require("../controllers/stock");
const router = express.Router();

router.get("/getmystock", getMystockPrices);

router.get("/getsuggestedstock/:amount", getSuggestedStock);

module.exports = router;
