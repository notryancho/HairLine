const mongoose = require('mongoose');
const { Schema } = mongoose;

const hairtypeSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
   
  });

  module.exports = mongoose.model('Hairtype', hairtypeSchema);
