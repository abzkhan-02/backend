const express = require('express')

const userController= require('../controllers/userController')

const router= express.Router()


// router.get('/user/:apikey',userController.fetchUser);


// router.get('/',userController.sendUserAdmin)

router.post('/user/register',userController.registerUser)

module.exports = router;