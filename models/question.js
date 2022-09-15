const mongoose = require('mongoose')
const Schema = mongoose.Schema



const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    id: {
        type:Number ,
    }

})


const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question