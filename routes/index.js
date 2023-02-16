const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

module.exports = router; 

