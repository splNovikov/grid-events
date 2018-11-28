const express = require('express');
const router = new express.Router();
let controller = require('./controller.js');

// API ROUTES //

// Retrieve news
router.get('/news', controller.getNews);

// Get info about current user
router.get('/me', controller.getUserInfo);

module.exports = router;
