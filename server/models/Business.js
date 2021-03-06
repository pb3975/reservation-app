const mongoose = require('mongoose')

const Business = mongoose.model('business',
  {
    type: String,
    name: String,
    hours_of_operation:{
      monday:{ open: Number, close: Number },
      tuesday: { open: Number, close: Number },
      wednesday: { open: Number, close: Number },
      thursday: { open: Number, close: Number },
      friday: { open: Number, close: Number },
      saturday: { open: Number, close: Number },
      sunday: { open: Number, close: Number },
    }, 
    location: {
      address: String,
      city: String,
      state: String,
      zip_code: String,
      coordinate: [Number] //[<latitude>, <longitude>]
    }


  }
);

module.exports = Business;