const Group = require('./../Models/groupModel');
const User = require('../Models/userModel')

exports.welcomeGroup = (req, res) => {
    res.send('welcome to the chat group app')
}

exports.createGroup = async (req, res) => {
    const newGroup = await Group.create(req.body)
    res.status(200).json({
        message: 'group created successfully',
        data:{
            newGroup
        }
    })
}

exports.joinGroup =  (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

  // Find the channel by id
    Group.findOne({ _id: id }, (err, Group) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error finding Group');
          return;
        }
    
        if (!Group) {
          res.status(404).send('Channel not found');
          return;
        }
         // Check if the user is already a member of the Group
    if (Group.members.includes(userId)) {
        res.status(400).send('User is already a member of the Group');
        return;
      }

    }
    )
        // Add the user to the channel's members list
    Group.updateOne(
        { _id: id },
        { $push: { members: userId } },
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Error adding member to Group');
            return;
          }
  
          res.send('User added to Group successfully');
        }
      );
}

exports.getMembers = async (req, res) => {
   const group = await Group.findById(req.params.id).populate('members', 'name')
   if(!group){
    res.send('Group not found ')
   }
   res.json(group.members)

}