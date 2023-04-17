const express = require('express')
const router = require('./Routes/route')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/chatgroupapp', router);


module.exports = app;


