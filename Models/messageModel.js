const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
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
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
