const express = require('express')
const pageController = require('../controllers/pageController')
const authController = require('../controllers/authController')
const router = express.Router()


router.route('/').get(pageController.getIndexPage)
router.route('/register').get(pageController.getRegisterPage)
router.route('/login').get(pageController.getLoginPage)
router.route('/myProducts').get(authController.getSellerPage)
router.route('/myBasket').get(authController.getMyBasketPage)
router.route('/myOrders').get(authController.getOrdersPage)
router.route('/chat').get((req,res)=>{res.render('chat')})

module.exports= router 