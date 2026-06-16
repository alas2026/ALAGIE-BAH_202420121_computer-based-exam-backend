const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.createUser);

module.exports = router;
