const express = require("express");
const db = require("./config/db");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const { getAllData } = require("./controllers/user");
const userrouter = require("./routes/user");
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(cors());

app.use("/api/hsbc", userrouter);
app.listen(
  process.env.PORT || 5000,
  console.log(`server listening on port ${process.env.PORT || 5000}`)
);
