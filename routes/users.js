var express = require('express');
var Userrouter = express.Router();
// var indexmodel=require('../models/indexmodel')

/* GET users listing. */
Userrouter.get('/', function(req, res, next) {
  res.render('Uindex');
});
Userrouter.get('/about', function(req, res, next) {
  res.render('Uabout');
});
Userrouter.get('/login', function(req, res, next) {
  res.render('Ulogin');
});

Userrouter.get('/Upwchange', function(req, res, next) {
  res.render('Upwchange');
});

module.exports = Userrouter;
