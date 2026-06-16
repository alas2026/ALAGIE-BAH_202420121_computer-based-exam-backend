const express = require('express');
const controller = require('./exams.controller');
const router = express.Router();

router.get('/', controller.getExams);
router.get('/:id', controller.getExam);
router.post('/', controller.createExam);
router.post('/:id/submit', controller.submitExam);
router.get('/submissions/all', controller.getSubmissions);

module.exports = router;
