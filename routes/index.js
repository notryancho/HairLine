const { Router } = require('express');
const controllers = require ('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.get('/getAllHairProducts', controllers.getAllHairProducts)

router.get('/getAllHairTypes', controllers.getAllHairTypes)

router.post('/postComment', controllers.postComment)

router.put('/updateComment', controllers.updateComment)

router.delete('/deleteComment', controllers.deleteComment)






module.exports = router; 

