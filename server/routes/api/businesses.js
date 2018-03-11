const express = require('express')
const router = express.Router()

const Business = require('../../models/Business');

router.get('/', function (req, res) {

  Business.find(function(err, businesses) {
    res.send(businesses);
  });
  
});

module.exports = router;
