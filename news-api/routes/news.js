var express = require("express");
var router = express.Router();
const { default: axios } = require("axios");
var apiUtils = require("../utils/apiUtils.js");
const { ErrorHandler } = require("../app/error");

router.get("/", function (req, res) {
  res.send("News Home Page");
});

/*********************************************
 * Path: /list_news?
 * Query Params: keyWord, country, pageSize, page
 * Body Params: None
 *********************************************/
router.get("/list_news", function (req, res) {
  const { keyWord, country, pageSize, page } = req.query;
  let url = apiUtils.getNewsListUrl(keyWord, country, pageSize||20, page||1); 

  if (!keyWord && !country) {
    throw new ErrorHandler(
      404,
      "missing fields : Provide either keyWord or country"
    );
  }

  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err.code);
      res.json(err);
    });
});

module.exports = router;