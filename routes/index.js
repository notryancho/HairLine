const { Router } = require('express');
const controllers = require ('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.get('/getAllHairProducts', controllers.getAllHairProducts)

router.get('/getAllHairTypes', controllers.getAllHairTypes)

router.get('/getHairProductbyId/:id', controllers.getHairProductById)

router.get('/getHairTypeById/:id', controllers.getHairTypeById)

router.post('/postComment', controllers.postComment)

router.put('/updateCommentById/:id', controllers.updateCommentById)

router.put('/updateHairTypeById/:id', controllers.updateHairTypeById)

router.delete('/deleteCommentById/:id', controllers.deleteCommentById)






module.exports = router; 

