var express = require('express');
var mongoose = require('mongoose');
const Foo = require('../model/Foo').Foo;
var router = express.Router();

var stateMap = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
  undefined: 'undefined'
};

router.get('/status', function(req, res, next) {
  res.status(200).json({
    timestamp: new Date(),
    mongoState: stateMap[mongoose.connection.readyState]
  });
});

router.get('/insert', function(req, res, next) {

  const newFoo = new Foo({
    text: 'test data',
    timestamp: new Date()
  });

  newFoo.save(function(err) {
    if (err) {
      res.status(500).json({err: err});
      console.error(err);
      return next(err);
    }
    res.status(200).json({msg: 'saved successfully test data'});
  });
});

module.exports = router;
