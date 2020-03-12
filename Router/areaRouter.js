const express= require('express')

const areaController=require('../controllers/areaController')

const router=express.Router()


router.get('/area',areaController.fetchArea);

module.exports=router;