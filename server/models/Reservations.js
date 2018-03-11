const mongoose = require('mongoose')

const Reservation = mongoose.model('reservation',
  {
    business_id: String,
    customer_id: String,
    reservation_time: String,
    number_of_people:{type: Number, default: 1 }
  }
)

modules.export = Reservation;