const express = require('express');
const router = new express.Router();
let controller = require('./controller.js');

// API ROUTES //

// Retrieve news
router.get('/news', controller.getNews);

// Retrieve newsItem
router.get('/news/:id', controller.getNewsItem);

// Create news
router.post('/news', controller.createNews);

// Delete news
router.delete('/news/:id', controller.deleteNews);

// Get info about current user
router.get('/me', controller.getUserInfo);

module.exports = router;
