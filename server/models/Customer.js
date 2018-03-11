
const mongoose = require('mongoose')

const Customer = mongoose.model('customer',
  {
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    phone: String,
    email: String,
    password: String,
    location: {
      city: String,
      state: String,
      zip_code: String,
    }


  }
);

modules.export = Customer;
