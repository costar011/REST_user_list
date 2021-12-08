const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan"); // morgan은 기록자.
const helmet = require("helmet");
const cors = require("cors");

const users = require("./db");

// app 이라는 변수를 만들었다.
const app = express();
const PORT = 4000; // PORT는 4000

// morgan을 combined 모드로 사용할거다.
app.use(morgan("combined"));
app.use(cors());

// GET 방식
app.get("/api/user/list", (req, res, next) => {
  res.status(200).json(users);
});

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log("4000 USER REST SERVER");
});
