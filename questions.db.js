const prisma = require('../../config/prisma');

async function getAllQuestions(examId) {
  return prisma.question.findMany({ where: { examId: parseInt(examId) }, include: { answers: true } });
}

async function createQuestion(examId, data) {
  return prisma.question.create({
    data: {
      examId: parseInt(examId),
      text: data.text,
      answers: {
        create: data.answers // array of { text, isCorrect }
      }
    }
  });
}

module.exports = { getAllQuestions, createQuestion };
