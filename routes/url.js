const express = require('express');
const {handleGenerateNewShortURL, handleRedirection, handleGetAnalytics} = require("../controllers/url");
const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:shortId', handleRedirection);
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;