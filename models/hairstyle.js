const mongoose = require('mongoose');
const { Schema } = mongoose;

const hairstyleSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  hairtype_id: {
    type: Schema.Types.ObjectId,
    ref: 'Hairtype',
    required: true
  }
});

module.exports = mongoose.model('Hairstyle', hairstyleSchema);




