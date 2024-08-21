const express = require("express");
const {
  getAllData,
  getGenderSpecificData,
  getAmountWithFilter,
  getStockInvestiment,
  getMystockPrices,
  getSuggestedStock,
} = require("../controllers/user");
const userrouter = express.Router();

userrouter.get("/alldata", getAllData);

userrouter.get("/genderSpecific", getGenderSpecificData);

userrouter.get("/getamountfilter/:amount", getAmountWithFilter);

userrouter.get("/getstockprice", getStockInvestiment);

userrouter.get("/getmystock", getMystockPrices);

userrouter.get("/getsuggestedstock", getSuggestedStock);
module.exports = userrouter;
