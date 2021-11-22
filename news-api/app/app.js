const { response } = require("express");
var express = require("express");
var app = express();
var cors = require("cors");
const dotenv = require("dotenv");
var news = require("../routes/news.js");
const { ErrorHandler, handleError } = require("./error");

app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("News App - Backend..");
});

app.use(process.env.NEWS, news);

app.get("*", function (req, res) {
  throw new ErrorHandler(404, "route not found");
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

let server = app.listen(process.env.PORT, () => {
  console.log(
    `News-App backend running at http://%s:%s`,
    process.env.HOST,
    process.env.PORT
  );
});
