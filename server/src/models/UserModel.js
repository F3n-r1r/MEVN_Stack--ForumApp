const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 12

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

// Model for a user
// Id is automatically generated when a user is saved in the database, therefore its not needed in the model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            validateEmail
        ],
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
})

// Mongoose provide the 'pre' middleware, to manipulate data before inserting it into the database
// Before saving a new user to the database, it runs this function
// which encrypts the password before doing 'next' and then saving it
userSchema.pre('save', function(next) {
    let user = this
    // Check if the password is changed, if it's not, it does not have to encrypt again
    // Eg. user updates the email, but not the password, so it doesn't have to be encrypted again
    if (!user.isModified('password')) {
        return next();
    } else {
        bcrypt.hash(user.password, saltRounds, (err, hash) => {
            if (err) {
                return next(err);
            } else {
                user.password = hash;
                next();
            }
        })
    }
})


// Export the model so it can be accessed elsewhere
module.exports = mongoose.model('User', userSchema);