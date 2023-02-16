const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use('/', routes);


const hairstylesRouter = require('./routes/hairstyles')
app.use('/api/hairstyles', hairstylesRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 


