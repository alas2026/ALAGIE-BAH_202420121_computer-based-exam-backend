const prisma = require('../../config/prisma');

// Get all answers for a given question
async function getAnswers(questionId) {
  return prisma.answer.findMany({
    where: { questionId: parseInt(questionId) }
  });
}

// Create a new answer for a given question
async function createAnswer(questionId, data) {
  return prisma.answer.create({
    data: {
      questionId: parseInt(questionId),
      text: data.text,
      isCorrect: data.isCorrect
    }
  });
}

// Optional: Get a single answer by ID
async function getAnswerById(id) {
  return prisma.answer.findUnique({
    where: { id: parseInt(id) }
  });
}

// Optional: Update an answer
async function updateAnswer(id, data) {
  return prisma.answer.update({
    where: { id: parseInt(id) },
    data
  });
}

// Optional: Delete an answer
async function deleteAnswer(id) {
  return prisma.answer.delete({
    where: { id: parseInt(id) }
  });
}

module.exports = {
  getAnswers,
  createAnswer,
  getAnswerById,
  updateAnswer,
  deleteAnswer
};
