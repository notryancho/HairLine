const { model } = require('mongoose')
const HairStyleSchema = require('./hairstyle')
const HairProductSchema = require('./hairproduct')

const Hairstyle = model('hairstyle', HairStyleSchema)
const Hairproduct = model('hairproduct', HairProductSchema)

module.exports = {
    Hairstyle,
    Hairproduct
}