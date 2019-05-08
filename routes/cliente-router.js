var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cliente = require('../models/Cliente');

/* GET ALL Clientes */
router.get('/', function(req, res, next) {
  Cliente.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET unico Cliente BY ID */
router.get('/:id', function(req, res, next) {
  Cliente.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Cliente */
router.post('/', function(req, res, next) {
  Cliente.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Cliente.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Cliente */
router.delete('/:id', function(req, res, next) {
  Cliente.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;


