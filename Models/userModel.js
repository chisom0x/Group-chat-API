const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please give your new group a name']
    },
    password: {
       type: String,
       required: [true, 'please add a description for your new group']
    }
})

const User = new mongoose.model('User', userSchema)
module.exports = User;