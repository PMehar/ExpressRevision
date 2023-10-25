const express =  require("express");
const router = express.Router();

const productController = require('../controllers/products');

router.get("/contact-us",productController.getContacts);

router.post("/contact-us",productController.postContacts);

module.exports = router;