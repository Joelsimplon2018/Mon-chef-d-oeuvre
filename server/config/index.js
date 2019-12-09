const database = require("./database");
// database.test();
const express = require("express");
const api = express.Router();
const app = express();
const path = require('path');
const multer= require("multer");

const cors= require('cors');
const bcrypt = require("bcrypt");
const fs = require("fs");
const port = 3306;
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');



require("rootpath")();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const auth = express.Router();



app.listen(port, () => {
    console.log('Example app listening on port ' + port);
  });