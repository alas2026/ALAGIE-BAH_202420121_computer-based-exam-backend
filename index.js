const express = require('express');
const examsRouter = require('../resources/exams/exams.router');

const router = express.Router();

router.use('/exams', examsRouter);

module.exports = router;
