const db = require('./answers.db');

exports.getAnswers = async (req, res) => {
  const answers = await db.getAnswers(req.params.questionId);
  res.json(answers);
};

exports.createAnswer = async (req, res) => {
  const answer = await db.createAnswer(req.params.questionId, req.body);
  res.status(201).json(answer);
};
