require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
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
if(process.env.NODE_ENV === 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}

//routes
app.use('/api', require('./routes'))

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("app is running on port:", port);
})
