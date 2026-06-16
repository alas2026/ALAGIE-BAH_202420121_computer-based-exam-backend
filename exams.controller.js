const db = require('./exams.db');

exports.getExams = async (req, res) => {
  const exams = await db.getAllExams();
  res.json(exams);
};

exports.getExam = async (req, res) => {
  const exam = await db.getExamById(req.params.id);
  if (!exam) return res.status(404).json({ error: 'Exam not found' });
  res.json(exam);
};

exports.createExam = async (req, res) => {
  const exam = await db.createExam(req.body);
  res.status(201).json(exam);
};

exports.submitExam = async (req, res) => {
  const submission = await db.submitExam(req.params.id, req.body);
  res.status(201).json(submission);
};

exports.getSubmissions = async (req, res) => {
  const submissions = await db.getSubmissions();
  res.json(submissions);
};
