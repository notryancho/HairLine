
const { Schema } = require('mongoose')

const HairProductSchema = new Schema (
    {
        name: {
          type: String,
          
        },
        imageUrl: {
          type: String,
          
        },
        comments: [{
          type: Schema.Types.ObjectId, ref: "Comments" }],

        
        
      });
      
      module.exports = HairProductSchema;
 