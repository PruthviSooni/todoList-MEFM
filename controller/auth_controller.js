const User = require('../models/user_model')
const {validationResult } = require('express-validator').validationResult 
exports.login = (req, res, next) => {
    
    res.json({
        message: "Login Route ."
    })
}
exports.register = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    res.json({
        message: "Register Route ."
    })
}