// Require in dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')

const users = require('./routes/UsersRoute')
const mongoose = require('./config/database')

// Inform that the app is an express app
const app = express()
// Tell app to use morgan to log request (combined is a predefined log format)
app.use(morgan('combined'))
// Tell app to use bodyParser to allow the app to easily parse any json request that are send in
app.use(bodyParser.urlencoded({extended: false}))
// Tell app to use cors to allow a client to access it
app.use(cors())
//
app.set('secretKey', 'randomkey')




// Connection to the mongodb, which is placed in './config/database.js'
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))




// Public routes (Dont need to be authenticated to access)
app.use('/users', users)

// Private routes (Need to be authenticated to access)



// Function to pass in to the routes.
// Gets the token, decodes it and tries to match the decoded user id to the user id.
// If they match it return next, which then means that the user is logged in.
// And can proced through to the protected route
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({
                status: 'error',
                message: err.message,
                data: null
            })
        } else {
            req.body.userId = decoded.userId
            next();
        }
    })
}




// Set a port for the server to start on (process.env.PORT allows for the port to be overriden eg. when deployed)
const port = process.env.PORT || 8081
// Function that takes in the parameter port which in this case is: 8081 -> "Busy Port Handling"
function listen (port) {
    // If no error then app will listen on the specified port, and console log a msg
    app.listen(port, () => {
        console.log(`server is running on port: ${port}`);
        // If there is an error do the following function which takes in that error
    }).on('error', function (err) {
        // If that error equals "EADDRINUSE" which means the port is in already in use, then increment port number by 1, and run the listen function again
        // Works without the "errno", it is just more specific this way
        if(err.errno === 'EADDRINUSE') {
            console.log(`----- Port ${port} is busy, trying with port ${port + 1} -----`);
            listen(port + 1)
            // Else if it can't start on the port and it the error isn't that the port is in use, then just console log the error
        } else {
            console.log(err);
        }
    });
}
// Call the "listen" function an pass in the "const port"
listen(port);


