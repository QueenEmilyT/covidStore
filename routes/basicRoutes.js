const express = require('express');
// const router = require('./managerRoutes');
const router = express();
router.get('/', (req, res) => {
    res.render('index')
})
module.exports = router