const mongoose = require('mongoose');

const hairstyleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Hairstyle', hairstyleSchema);


module.exports = Hairstyle;
