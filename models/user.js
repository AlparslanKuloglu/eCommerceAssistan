const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt=require('bcrypt')


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required:true
    },
    address: {
        type: String,
    },
    basket:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
      }],
      ordersDocument:[{
          type: String
        }
      ],
    role:{
        type: String,
        enum:["Customer", "Seller", "Admin"],
        default: "Customer"
      }, 
    quCount:{
        type:Number
      }

})



const User = mongoose.model('User', UserSchema)
module.exports = User



