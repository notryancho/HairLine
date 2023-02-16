
const { Schema } = require('mongoose');

const HairTypeSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    comments: [{
      type: Schema.Types.ObjectId, ref: "Comments" }],
   
  });

  module.exports = HairTypeSchema;
