const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
   .use(bodyParser.urlencoded({extended: false}))
   .use("/user", require("./user/route"))
   .get('*', (_, res) => res.status(404)
   .json({success: false, data: "endpoint not found."}));

module.exports = app;

//This will be our entry file for our express api. 
//Every call to our /api/* url will be handled via this file.