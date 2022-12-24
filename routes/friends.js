const express = require('express');
const router = express.Router();
const friendsController = require('../controllers/friendsController');

router.get('/', friendsController.viewFriends);
router.get('/mutual-friends', friendsController.viewMutualFriends)
module.exports = router;