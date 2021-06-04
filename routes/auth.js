const express = require('express')
const router = express.Router()
const authController = require('../controller/auth_controller')
// POST api/v1/auth/login
router.post('/login', authController.login)

// POST api/v1/auth/register
router.post('/register', authController.register)

module.exports = router