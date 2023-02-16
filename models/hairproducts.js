
const { Schema } = require('mongoose')

const HairProductSchema = new Schema (
    {
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
      
      module.exports = HairProductSchema;
 