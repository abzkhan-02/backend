const express = require('express')

const userController= require('../controllers/userController')

const router= express.Router()


router.get('/user',userController.sendUser);

router.get('/',userController.sendUserAdmin)


module.exports = router;