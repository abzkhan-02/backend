const express = require('express')
const bodyParser = require('body-parser');

const userRouter= require('./Router/userRouter')//import user router from Router directory
const stateRouter= require('./Router/stateRouter')
const areaRouter=require('./Router/areaRouter')
const cityRouter=require('./Router/cityRouter')
const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(userRouter);
app.use(stateRouter);
app.use(areaRouter);
app.use(cityRouter);

app.listen(4000);