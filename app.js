const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan"); // morgan은 기록자.
const helmet = require("helmet");
const cors = require("cors");

const users = require("./db");

const app = express();
const PORT = 4000;

app.use(morgan("combined"));
app.use(cors());

app.get("/api/user/list", (req, res, next) => {
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log("4000 USER REST SERVER");
});
