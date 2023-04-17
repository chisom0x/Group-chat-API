const Channel = require('./../Models/groupModel');
const Message = require('./../Models/messageModel')


exports.sendMessage = async (req, res) => {
        const channel = await Channel.findById(req.params.id);
        if (!channel) {
          return res.status(404).json({ message: 'Channel not found' });
        }
        const message = await Message.create(req.body)
        res.json({
            data: {
                message
            }
        })
}