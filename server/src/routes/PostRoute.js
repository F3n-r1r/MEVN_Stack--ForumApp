const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');


router.post('/postNewThread', postController.post);


module.exports = router;