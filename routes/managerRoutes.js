const express = require('express');

const router = express.Router()
const Manager = require("../model/managerModel")



router.get('/', (req, res) => {
    res.render("managerLogIn")
});

router.get('/dashboard', (req, res) => {
    res.render("managerDashboard", {
        title: "This is managers Dashboard",
        name: "Queen The Manager"
    })

})

router.post('/managerLogIn', (req, res) => {
    const manager = new Manager(req.body)
    manager.save((error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/managerLogIn/dashboard")
        }

    })

})
module.exports = router