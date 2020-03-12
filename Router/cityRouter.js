const express=require('express')

const cityController=require('../controllers/cityController')

const router=express.Router();


router.get('/city',cityController.fetchCity);

module.exports=router;