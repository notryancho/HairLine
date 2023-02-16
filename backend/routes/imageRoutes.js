const express = require('express');
const router = express.Router();
const Image = require('../models/Image'); 

router.get('/images', async (req, res) => {
    const tag = req.query.tag; // Retrieving tag from query parameter
    try {
      const images = await Image.find({ tags: tag }); // Querying the database to retrieve images with matching tag
      res.json(images); // Returning the matching images as a JSON response
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
  module.exports = router;