const prisma = require('../../config/prisma');

async function getAllSubmissions() {
  return prisma.submission.findMany({ include: { exam: true, user: true } });
}

async function submitExam(examId, userId, answers) {
  return prisma.submission.create({
    data: {
      examId: parseInt(examId),
      userId: parseInt(userId),
      answers: JSON.stringify(answers)
    }
  });
}

module.exports = { getAllSubmissions, submitExam };
