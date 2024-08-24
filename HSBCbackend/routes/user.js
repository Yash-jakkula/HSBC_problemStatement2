const express = require("express");
const {
  getAllData,
  getGenderSpecificData,
  getAmountWithFilter,
  getStockInvestiment,
  getMystockPrices,
  getSuggestedStock,
  updateFormat,
  getUserById,
} = require("../controllers/user");
const advanceResult = require("../midllewares/advanceResults");
const userModel = require("../models/customer");
const userrouter = express.Router();

userrouter.get("/alldata", getAllData);

userrouter.get(
  "/genderSpecific/:gender",

  getGenderSpecificData
);

userrouter.get("/getuser", getUserById);

userrouter.get("/getamountfilter", getAmountWithFilter);

userrouter.get("/getstockprice", getStockInvestiment);

userrouter.put("/updateformat", updateFormat);
module.exports = userrouter;
