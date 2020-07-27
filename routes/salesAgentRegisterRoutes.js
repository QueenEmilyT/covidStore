const express = require('express');
const router = express.Router();
const Agent = require("../model/agentModel");


router.get('/', (req, res) => {
    res.render("salesAgentRegister")
});

router.get('/salesAgentRegister', (req, res) => {
    Agent.find((err, agents) => {
        if (err) console.log(err)
        res.render("salesAgentRegister", {
            title: "You are on Sales Agent register page",
            agents: agents
        })
    })

})

router.post('/salesAgentRegister', (req, res) => {
    const agent = new Agent(req.body)
    agent.save((error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/salesagent/salesAgentRegister")
        }

    })

})
module.exports = router