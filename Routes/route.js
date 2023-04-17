const express = require('express')
const router = express.Router()
const groupController = require('./../Controllers/groupController')
const userController = require('./../Controllers/userController')
const messageController = require('./../Controllers/messageController')

router
.route('/signUp')
.post(userController.createUser)

router
.route('/:id/joingroup')
.post(groupController.joinGroup)

router
.route('/:id/getmembers')
.get(groupController.getMembers)

router
.route('/:id/sendmessage')
.post(messageController.sendMessage)

router
.route('/')
.get(groupController.welcomeGroup)
.post(groupController.createGroup)


module.exports = router; 