
const { Schema } = require('mongoose')

const CommentsSchema = new Schema (
    {
        name: {
          type: String,
          required: true
        },
        comment: {
          type: String,
          required: true
        }, 
        hairId: [{
            type: Schema.Types.ObjectId, ref: "Comments" }],  
      });
      
      module.exports = CommentsSchema; 