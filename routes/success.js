const express =  require ("express");

const router = express.Router();

const productController = require('../controllers/products');

router.get("/success",productController.getSuccess);

module.exports = router;