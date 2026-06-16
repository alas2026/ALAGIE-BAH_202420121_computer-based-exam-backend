const db = require('./submissions.db');

exports.getSubmissions = async (req, res) => {
  const submissions = await db.getAllSubmissions();
  res.json(submissions);
};

exports.submitExam = async (req, res) => {
  const submission = await db.submitExam(req.params.examId, req.body.userId, req.body.answers);
  res.status(201).json(submission);
};
