const express = require('express');
const Register = require('../model/registrationModel');
const router = express.Router()


router.get('/register', (req, res) => {
    res.render('registration')
})


router.post('/register', async(req, res) => {
    const register = new Register(req.body)
    try {
        await register.save((error, result) => {
            if (error) {
                console.log(error)
            }
            console.log(result)
            res.redirect('/registration/register')
        })
    } catch (error) {
        console.log(error)

    }


})

module.exports = router