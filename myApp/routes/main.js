// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const productAddController = require('../controllers/productAddController');
const productCartController = require('../controllers/productCartController');
const productDetailController = require('../controllers/productDetailController');
const registerController = require('../controllers/registerController');
const footerController = require('../controllers/footerController');
const headerController = require('../controllers/headerController');


/* GET - home page. */
router.get('/', mainController.root);

/* GET - home page. */
router.get('/productDetail',productDetailController.root);

/* GET - home page. */
router.get('/productCart',productCartController.root);

/* GET - home page. */
router.get('/register',registerController.root);

/* GET - home page. */
router.get('/productAdd',productAddController.root);

/* GET - footer. */
router.get('/footer',footerController.root);

/* GET - footer. */
router.get('/header',headerController.root);


module.exports = router;
