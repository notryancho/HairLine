
const { Schema } = require('mongoose');

const HairTypeSchema = new Schema ({
    name: {
      type: String,
      
    },
    imageUrl: {
      type: String,
      
    },
    description: {
      type: String,
      
    },
    comments: [{
      type: Schema.Types.ObjectId, ref: "Comments" }],
   
  });

  module.exports = HairTypeSchema;
