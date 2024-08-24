const stockmodel = require("../models/stock");

const getMystockPrices = async (req, res) => {
  try {
    const data = await stockmodel.find();
    if (data.length == 0) {
      return res.status(404).json(data);
    }
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
  }
};

const getSuggestedStock = async (req, res) => {
  try {
    const { amount } = req.params;
    const stock = parseFloat(amount);

    const data = await stockmodel.find({ stock: { $gte: stock } });
    if (!data) {
      return res.status(500).json({ success: false, data });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getMystockPrices, getSuggestedStock };
