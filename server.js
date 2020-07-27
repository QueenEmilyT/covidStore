const express = require('express');
const managerRoutes = require('./routes/managerRoutes');
const basicRoutes = require('./routes/basicRoutes')
const mongoose = require('mongoose');
// const morgan = require('morgan')
const { check, validationResult } = require('express-validator');
const salesAgentRegisterRoutes = require('./routes/salesAgentRegisterRoutes')
const registrationRoutes = require('./routes/registration')
const productRoutes = require('./routes/productRoutes')


const app = express();
// const passportLocalMongoose = require('passport-local-mongoose');


// app.use(morgan('dev'))

app.set('view engine', 'pug')
app.set('views', './views')
mongoose.connect("mongodb://localhost:27017/coviddb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

//UserDetail.plugin(passportLocalMongoose);


app.use('/uploads', express.static('uploads'));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/manager', managerRoutes)
app.use('/', basicRoutes)

app.use('/salesagent', salesAgentRegisterRoutes)
app.use('/registration', registrationRoutes)

app.use('/product', productRoutes)


app.listen(4040, () => console.log('listening'));;