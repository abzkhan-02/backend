const express = require('express')

const userController= require('../controllers/userController')

const router= express.Router()


router.get('/',userController.sendUser);

router.get('/user',userController.sendUserAdmin)


module.exports = router;