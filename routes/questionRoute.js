const express = require('express')
const questionController = require('../controllers/questionController')
const router = express.Router()



router.route('/add').post(questionController.createQuestion)

module.exports= router 