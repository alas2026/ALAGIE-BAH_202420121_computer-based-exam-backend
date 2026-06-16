const express = require('express');
const controller = require('./answers.controller');
const router = express.Router({ mergeParams: true });

router.get('/:questionId', controller.getAnswers);
router.post('/:questionId', controller.createAnswer);

module.exports = router;
