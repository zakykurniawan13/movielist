const express = require('express')
const router = express.Router()
const { loginUser, register } = require('../controllers/userController')

router.post('/register', register)
router.post('/login', loginUser)

module.exports = router