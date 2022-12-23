const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.get('/', user.profile);
router.get('/contact', user.contact);
module.exports = router;