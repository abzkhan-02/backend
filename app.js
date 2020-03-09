const express = require('express')
const bodyParser = require('body-parser');

const user= require('./Router/userRouter')//import user router from Router directory

const app = express()

app.use(user);

app.listen(4000);