const database = require("./database");
// database.test();
const express = require("express");
const api = express.Router();
const app = express();
const path = require('path');
const multer= require("multer");
const router = express.Router();
const morgan = require('morgan');
const mysql = require('mysql');
const cors= require('cors');
const bcrypt = require("bcrypt");
const fs = require("fs");
const port = 3306;
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
require("rootpath")();
var passport = require('passport');
app.use(morgan('dev'));
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(express.json({ extended: false })); // to support JSON-encoded bodies
// app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies
// app.use(express.multipart({ extended: true }));       // NEED DEPENDENCIE -> to support JSON-encoded bodies



app.use(express.static(__dirname + '/public', {
  extensions: ['html']
})); //keep




const storage = multer.diskStorage({
  destination: "../src/assets/image/imgProfile/",

});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single("myImage");

app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});




require('../server/routes')(app);


// NOTRE APPLICATION EXPRESS ECOUTE SUR LE PORT HTTP DEFINIT EN DEBUT DE FICHIER
app.listen(port, () => {
  console.log('Example app listening on port ' + port);
}); //keep

module.exports = app;