const express = require('express');
const router = new express.Router();
let controller = require('./controller.js');

// API ROUTES //

// Retrieve profiles
router.get('/news', controller.getNews);

module.exports = router;
