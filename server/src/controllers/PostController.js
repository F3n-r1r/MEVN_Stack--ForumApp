const postModel = require('../models/PostModel')



module.exports = {

    post: function (req, res, next) {
        postModel.create({
            titel: req.body.titel,
            body: req.body.body,
            author: "5c59ae9028d838170472e8ba"
        }, function(err, result) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: 'success',
                    message: 'Post was succesfully added!',
                    data: null
                })
            }
        })
    }


}