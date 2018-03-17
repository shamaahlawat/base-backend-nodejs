const express = require('express');
const router = express.Router();

router.use('/posts', require('./posts_controller'));
router.use('/users', require('./users_controller'));

module.exports = router;
