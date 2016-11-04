var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var stateMap = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting'
};

router.get('/mongostate', function(req, res, next) {
  res.json({
    state: stateMap[mongoose.connection.readyState]
  });
});

module.exports = router;
