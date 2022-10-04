const productController = require('../controller/productController.js');

const router = require('express').Router();

router.post('/addproduct', productController.addProduct);
router.get('/products', productController.allProduct);
router.put('/products/update/:id', productController.updateProduct);


module.exports = router;