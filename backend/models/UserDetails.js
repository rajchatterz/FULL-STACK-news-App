const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,'Please Enter name']
        },
        email: {
            type: String,
            required: [true,'Please Enter Email']
        },
        password: {
            type: String,
            required: [true, 'Please Enter Password']
        }

    },
    {
        timeStamp:true
    }
)
const User = mongoose.model('User', UserSchema)
module.exports = User;