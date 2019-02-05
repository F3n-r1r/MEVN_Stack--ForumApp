const userModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    // Method for creating a new user in the database
    // 
    create: function(req, res, next) {
        userModel.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: 'success',
                    message: 'User succesfully added!',
                    data: null
                })
            }
        })
    },

    // Method for authenticating a user
    // Finds the user in the database by email
    // If no error, it tries to match the inputted password to the one in the database
    // If no error, it generates jwt token and adds a payload with the user id,
    // then encrypts it with the secret key and sets the validity of the token to 1hr
    authenticate: function(req, res, next) {
        userModel.findOne({
            email: req.body.email
        }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
               if (bcrypt.compare(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({
                        status: 'success',
                        message: 'user found!',
                        data: {
                            user: userInfo,
                            token: token
                        }
                    })
                } else {
                    res.json({
                        status: 'error',
                        message: 'Invalid email/password',
                        data: null
                    })
                } 
            } 
        })
    }


}