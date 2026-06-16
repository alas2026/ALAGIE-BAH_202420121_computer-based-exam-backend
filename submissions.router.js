const express = require('express');
const controller = require('./submissions.controller');
const router = express.Router({ mergeParams: true });

router.get('/', controller.getSubmissions);
router.post('/:examId', controller.submitExam);

module.exports = router;
