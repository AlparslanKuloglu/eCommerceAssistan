const express = require('express')
const pageController = require('../controllers/pageController')
const router = express.Router()



router.route('/').get(pageController.getHomePage)
router.route('/chat').get((req,res)=>{res.render('chat')} )

module.exports= router 