** If downloaded from github use Npm install in the server & client folder **

Backend setup:
(In server folder)
prerequisites: Have node/npm installed

1. Npm init                                                                 -> Create package.json file

2. Npm install nodemon --save-dev                                           -> Install nodemon to look for changes and restart server

3. Npm install eslint --save-dev                                            -> Install eslint to look for syntax errors

4. ./node_modules/.bin/eslint --init                                        -> Configure eslint
    4.1. Use a popular style guide
    4.2. Standard
    4.3. Javascript
    4.4. Yes, install dependencies
    
5. Setup package.json scripts                                               -> Configure scripts
    5.1. "start": "node src/server.js"                                      -> For production when deployed
    5.2. "lint": "eslint **/*.js"                                           -> Pick which files eslint should watch
    5.3. "dev": "nodemon src/server.js --exec \"npm run lint && node\""     -> Run method for dev which starts server.js with the                                                                                 configured eslint script
6. Npm install express --save                                               -> Is a layer on top of node.js which provides needed                                                                                     functionality etc. to build web applications
7. Npm install body-parser --save                                           -> To handle http post requests in express (Extracts body                                                                                 of incoming request an exposes it on req.body)
8. Npm install cors --save                                                  -> Cross-oring resource sharing allows Ajac request to                                                                                    skip the "same origin policy"
9. Npm install morgan --save                                                -> A http request middleware logger for node.js (logs                                                                                     details about requests) (can be only for development                                                                                   "dev-dependency")  

10. Npm install mongoose --save 

11. npm install --save bcrypt@3.0.2                                         -> At current stage bcrypt throws an error with npm install bcrypt,
                                                                               but can be installed by using this.

12. Npm install jsonwebtoken --save