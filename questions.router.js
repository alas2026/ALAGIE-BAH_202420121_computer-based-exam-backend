const express = require('express');
const controller = require('./questions.controller');
const router = express.Router({ mergeParams: true });

router.get('/:examId', controller.getQuestions);
router.post('/:examId', controller.createQuestion);

module.exports = router;
