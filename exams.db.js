const prisma = require('../../config/prisma');

async function getAllExams() {
  return prisma.exam.findMany();
}

async function getExamById(id) {
  return prisma.exam.findUnique({ where: { id: parseInt(id) } });
}

async function createExam(data) {
  return prisma.exam.create({ data });
}

async function submitExam(id, submission) {
  return prisma.submission.create({
    data: {
      examId: parseInt(id),
      studentId: submission.studentId,
      answers: JSON.stringify(submission.answers)
    }
  });
}

async function getSubmissions() {
  return prisma.submission.findMany({ include: { exam: true } });
}

module.exports = { getAllExams, getExamById, createExam, submitExam, getSubmissions };
