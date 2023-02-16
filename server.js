const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes');
const db = require('./db'); //connect to mongodb

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());


// Routes
app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



