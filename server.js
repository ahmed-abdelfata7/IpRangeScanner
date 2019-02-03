"use strict";
require("dotenv/config");
require("./utils/db.con");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT || 3000;
const URL = process.env.SERVER_URL;

//create the app
const app = express();

//config view engine
app.set("view egine", pug);

//serve static files
app.use(express.static("assets"));

//configure app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//listen to server
app.listen(PORT, () => {
    console.log(`Server is running at ${URL}:${PORT}`);
});