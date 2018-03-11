const express = require('express')
const router = express.Router()

const Customer = require('../../models/Customer');

router.get('/', function (req, res) {

  Customer.find(function(err, customers) {
    res.send(customers);
  });
  
});

module.exports = router;
