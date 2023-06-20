var express = require('express');
var router = express.Router();
var indexmodel = require('../models/indexmodel')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/about', function (req, res, next) {
  res.render('about');
});
router.get('/doctor', function (req, res, next) {
  res.render('doctor');
});
router.get('/depatment', function (req, res, next) {
  res.render('depatment');
});


router.get('/registration', function (req, res, next) {
  res.render('registration', { msg: '' });
});


router.post('/registration', function (req, res, next) {
  //  console.log(req.body);
  indexmodel.registration(req.body, (result) => {
    res.render('registration', { msg: 'Data Store Properly' });
  });

});
router.get('/contact', function (req, res, next) {
  res.render('contact');
});
router.get('/login', function (req, res, next) {
  res.render('login', { msg: '' });
});
router.post('/login', function (req, res, next) {
  // console.log(req.body)
  indexmodel.loginCheck(req.body, (result) => {
    if (result.length > 0) {
      res.redirect('/users');
    } else {
      res.render('login', { msg: 'Login again' });
    }
  });
});

router.get('/Ushowdata', function (req, res, next) {
  // console.log(req.body)
  res.render('Ushowdata')
    })

router.post('/Ushowdata', function (req, res, next) {
  indexmodel.showData(req.body, (result) => {

    if (result.length > 0) {
      // res.json(result)
      // console.log(result)
      res.render('show',{"userDetails":result})
    } else {
      res.render('Ushowdata')
    }
  })
});

router.get('/Userupdate', function (req, res, next) {
  res.render('Userupdate', { msg: 'express' });
});

router.post('/Userupdate', function (req, res, next) {
  // console.log(req.body)
  indexmodel.userUpdate(req.body, (result) => {
    res.render('Userupdate', { msg: 'Data Updated successfully' });
  })

});

router.get('/Ushowdata', function(req, res, next) {
  var p=url.parse(req.url,true).query
  indexmodel.manageuserstatus(p,(result)=>{
      console.log(result)
      res.redirect("/Ushowdata")
  })
});

module.exports = router;
