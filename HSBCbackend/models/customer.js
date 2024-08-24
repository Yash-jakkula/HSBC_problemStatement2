const mongoose = require("mongoose");

const schema = mongoose.Schema;

const user = new schema({}, { strict: false });

const userModel = mongoose.model("users", user);

module.exports = userModel;
