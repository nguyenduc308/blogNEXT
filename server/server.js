require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()

//db
mongoose.
    connect(process.env.DATABASE_LOCAL, 
    {useCreateIndex:true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    .then(()=> console.log("DB connected"))
    .catch(err => console.error(err))

//initial middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
  });

//routes
app.use('/api', require('./routes'))

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("app is running on port:", port);
})
