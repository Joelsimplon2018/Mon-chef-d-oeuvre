const express = require("express");
const router = express.Router();
const multer= require("multer");
const morgan = require('morgan');
const mysql = require('mysql');
const cors= require('cors');
const bcrypt = require("bcrypt");
const fs = require("fs");
const config = require("../config/config.json");
const jwt = require("jsonwebtoken");

const PrestataireModel= require('../models/prestat.model');


router.post("/authenticate", authenticate);
function authenticate(req, res, next) {
    console.log("controller ", req.body);

    PrestataireModel.authenticate(req.body).then(
    (prestataire, error) => 
      error
        ? res
            .status(400)
            .json({
              message: "Username or password is incorrect",
              success: false
            })
        : !prestataire
        ? res.status(401).send({ message: "Unknown user", success: false })
        : bcrypt.compare(req.body.password, prestataire.password)
            .then(function(match) {
              if (!match) return res.status(401).send("login failed");
              console.log('user before jwt encode : ', prestataire);
              const token = jwt.sign(
                JSON.parse(JSON.stringify(prestataire)),
                config.secret
              );
              res.status(200).send({ success: true, token, prestataire:prestataire });
            })
            .catch(error => next(error))
  );
}

router.post("/register", register);
function register(req, res, next) {
  bcrypt.hash(req.body.password, 10).then(hash => {
    req.body.password = hash;
    PrestataireModel.register(req.body)
      .then(prestataire =>
        prestataire
          ? res.json(prestataire)
          : res.status(400).json({ message: "Error in subscription !" })
      )
      .catch(err => next(err));
  });
}


router.post('/', createPrestataire);
function createPrestataire(req, res, next){
    PrestataireModel.createPrestataire(function(error, Prestataire){
        if(Prestataire) res.send(Prestataire);
        else res.status(400).send(error);
        
    }, req.body)
}

router.get("/", getPrestataire);
router.get("/:id", getPrestataire);

function getPrestataire(req, res, next){
    PrestataireModel
    .getPrestataire(req.params)
    .then(function(Prestataire){
        if(Prestataire) res.json(Prestataire);
        else res.status(400).json({ message: `controller : No  ...`})
        .catch(err => next(err));
    })
}

router.delete("/:id", deletePrestataire );

function deletePrestataire(req, res, next){
    PrestataireModel.deletePrestataire(req.params).then(function(Prestataire){
        if(Prestataire) res.json(Prestataire);
        else res.status(400).json({ message: `controller : No Prestataire deleded...`})
        .catch(err => next(err));
    })
}
  
router.patch('/', editPrestataire);
function editPrestataire(req, res, next){
    PrestataireModel.editPrestataire(req.body).then(function(Prestataire){
        if(Prestataire) res.json(Prestataire);
        else res.status(400).json({ message: `controller : No ...`})
        .catch(err => next(err));
    })
}

   
  module.exports = router;