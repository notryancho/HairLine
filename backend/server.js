const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()
const db = require('./db')
app.use('/api', require('./routes/images'));

// Connect to MongoDB
db.connect()
mongoose.connect('mongodb://localhost/hairline', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// Middleware
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// Define API routes
const hairstylesRouter = require('./routes/hairstyles')
// app.use('/api/hairstyles', hairstylesRouter)
app.use('/api', imagesRouter);
// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Serve frontend
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 


