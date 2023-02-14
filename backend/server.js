const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

