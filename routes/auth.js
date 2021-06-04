// imports
const express = require('express')
const router = express.Router()
const authController = require('../controller/auth_controller')
const User = require('../models/user_model')
const { body } = require('express-validator')

// POST api/v1/auth/login
router.post('/login', authController.login)

// POST api/v1/auth/register
router.post('/register', [

    // adding email, password & name validation
    body('email').isEmail().withMessage("Please enter a valid email!").custom((value, { req }) => {
        return User.findOne({ email: value }).then(doc => {
            if (doc) {
                return Promise.reject('Email is already exists')
            }
        })
    }).normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 5 }),
    body('name')
        .trim()
        .not()
        .isEmpty()
], authController.register)

module.exports = router