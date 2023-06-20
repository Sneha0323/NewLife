var express = require('express');
var adminrouter = express.Router();

/* GET users listing. */
adminrouter.get('/', function(req, res, next) {
    res.render('Aindex');
  });
  adminrouter.get('/Aupdate', function(req, res, next) {
    res.render('AUpdate');
  });
  adminrouter.get('/pwchange', function(req, res, next) {
    res.render('Apwchange');
  });
  adminrouter.get('/Auserlist', function(req, res, next) {
    res.render('AuserList');
  });
  
module.exports=adminrouter