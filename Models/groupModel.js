const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please give your new group a name']
    },
    description: {
       type: String,
       required: [true, 'please add a description for your new group']
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
      messages: [{
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        content: {
          type: String,
          required: true
        },
        timestamp: {
          type: Date,
          default: Date.now
        }
      }]
})

const Group = new mongoose.model('Group', groupSchema)
module.exports = Group;