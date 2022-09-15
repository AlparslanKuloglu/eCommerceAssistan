const User = require('../models/user')
const Question = require('../models/question')


exports.getHomePage = async ( req,res)=>  {
  const users = await User.find()
  const questions = await Question.find()

    res.status(200).render('homePage',{users,questions})
} 

exports.getPanelPage =(req,res)=> {
    res.status(200).render('chat')
} 


exports.getLoginPage =(req,res)=> {


  

    res.status(200).render('login')
} 


