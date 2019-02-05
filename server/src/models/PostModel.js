const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    titel: {
        type: String,
        maxLength: 150,
        required: true
    },
    body: {
        type: String,
        maxLength: 1000,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)