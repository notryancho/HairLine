const { model } = require('mongoose')
const HairTypeSchema = require('./hairtypes')
const HairProductSchema = require('./hairproducts')
const CommentsSchema = require('./comments')

const Comments = model('Comments', CommentsSchema)
const HairTypes = model('HairType', HairTypeSchema)
const HairProducts = model('HairProduct', HairProductSchema)

module.exports = {
    HairTypes,
    HairProducts,
    Comments
}