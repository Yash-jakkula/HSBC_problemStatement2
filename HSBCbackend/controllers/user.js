const userModel = require("../models/customer");
// const supabase = require("../config/db");
const getAllData = async (req, res) => {
  try {
    const { fraud, page = 1, limit = 10 } = req.query;
    const fraudVal = parseInt(fraud);
    let data = [];
    if (fraudVal === 1 || fraudVal === 0)
      data = await userModel
        .find({ fraud: fraudVal })
        .skip((page - 1) * limit)
        .limit(limit);
    else
      data = await userModel
        .find()
        .skip((page - 1) * limit)
        .limit(limit);
    if (!data) {
      return res.status(500).send({ data });
    }
    return res.status(200).send({ len: data.length, data });
  } catch (err) {
    console.error(err);
  }
};

const updateFormat = async (req, res) => {
  try {
    const result = await userModel.updateMany(
      { gender: "'F'" },
      { $set: { gender: "F" } }
    );
    if (!result) {
      return res.status(200).json({ result });
    }
    return res.status(200).json({ message: "updated succefully" });
  } catch (err) {
    console.error(err);
  }
};

const getGenderSpecificData = async (req, res) => {
  try {
    const { page } = req.query;
    const offset = (page - 1) * 100;

    if (req.params.gender) {
      const data = await userModel
        .find({ gender: req.params.gender })
        .skip(offset)
        .limit(100);
      if (!data) {
        return res.status(500).send({ femaleError });
      }
      return res.status(200).json({
        data,
      });
    }
    return res.status(400).json({ message: "bad request" });
  } catch (err) {
    console.error(err);
  }
};

const getAmountWithFilter = async (req, res) => {
  try {
    const { low, high, page = 1, limit = 10 } = req.query;

    const lowValue = parseFloat(low);
    const highValue = parseFloat(high);
    const pageValue = parseInt(page, 10);
    const limitValue = parseInt(limit, 10);
    const offset = (pageValue - 1) * limitValue;

    if (
      isNaN(lowValue) ||
      isNaN(highValue) ||
      isNaN(pageValue) ||
      isNaN(limitValue)
    ) {
      return res.status(400).json({ error: "Invalid query parameters" });
    }

    const data = await userModel
      .find({ amount: { $gte: lowValue, $lt: highValue } })
      .skip(offset)
      .limit(limitValue);

    if (data.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { cid, fraud } = req.query;
    const fraudVal = parseInt(fraud);
    let data = [];
    if (fraudVal === 1 || fraudVal === 0)
      data = await userModel.find({ customer: cid, fraud: fraudVal });
    else data = await userModel.find({ customer: cid });

    if (!data) {
      return res.status(404).json({ message: "cannot find customer" });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const getStockInvestiment = async (req, res) => {
  try {
    var url =
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=KLXV7ES2SA9UGQZG";
    const data = await fetch(url, {
      json: true,
      headers: { "User-Agent": "request" },
    });
    const stockprice = await data.json();
    return res.status(200).send(stockprice);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllData,
  getUserById,
  getGenderSpecificData,
  getAmountWithFilter,
  getStockInvestiment,
  updateFormat,
};
