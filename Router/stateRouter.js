const express = require('express')

const router = express.Router()
const stateController=require("../controllers/stateController");


router.get('/state',stateController.fetchState);

module.exports=router;