const db = require('./questions.db');

exports.getQuestions = async (req, res) => {
  const questions = await db.getAllQuestions(req.params.examId);
  res.json(questions);
};

exports.createQuestion = async (req, res) => {
  const question = await db.createQuestion(req.params.examId, req.body);
  res.status(201).json(question);
};
