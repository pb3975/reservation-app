const express = require('express')
const router = express.Router()

const Reservation = require('../../models/Reservations');

router.get('/', function (req, res) {

  Reservation.find(function(err, reservations) {
    res.send(reservations);
  });
  
});

module.exports = router;
