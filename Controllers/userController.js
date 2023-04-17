const User = require('./../Models/userModel')

exports.createUser = async (req, res) => {
    const newUser = await User.create(req.body)
    res.status(200).json({
        message: 'user created successfully',
        data:{
            newUser
        }
    })

}