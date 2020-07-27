const express = require('express')
const Product = require("../model/productModel");
const { route } = require('./managerRoutes');
const multer = require('multer');

const router = express.Router()
    //multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, "004" + file.originalname)
    }
})

const upload = multer({ storage: storage });



router.get('/', (req, res) => {
    res.render('product')
})


router.get('/add_product', (req, res) => {
    res.render("product")
});

router.post('/add_product', upload.single('product_picture'), async(req, res) => {
    const product = new Product()
    product.name = req.body.name
    product.product_picture = req.file.path
    product.serial_number = req.body.serial_number
    product.category = req.body.category
    product.quantity = req.body.quantity
    product.price = req.body.price
    product.serial_number = req.body.serial_number
    product.entry_date = req.body.entry_date
    product.size = req.body.size
    product.color = req.body.color
    product.description = req.body.description

    try {
        await product.save((error, result) => {
            if (error) {
                console.log(error)
            }
            console.log(result)
            res.redirect('/product')
        })
    } catch (error) {
        console.log(error)

    }

})


module.exports = router