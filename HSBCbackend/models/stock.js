const mongoose = require("mongoose");

const schema = mongoose.Schema;

const stock = new schema({}, { strict: false });

const stockmodel = mongoose.model("stock", stock);

module.exports = stockmodel;
