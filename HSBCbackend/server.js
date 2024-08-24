const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./config/db");
const cors = require("cors");
const stockrouter = require("./routes/stock");
const userrouter = require("./routes/user");
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(cors());
db()
  .then((resolve, reject) => {
    app.listen(
      process.env.PORT || 5000,
      console.log(`server listening on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error(err));
app.use("/api/hsbc", userrouter);
app.use("/api/hsbc/stock", stockrouter);
