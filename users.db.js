const prisma = require('../../config/prisma');

async function getAllUsers() {
  return prisma.user.findMany();
}

async function getUserById(id) {
  return prisma.user.findUnique({ where: { id: parseInt(id) } });
}

async function createUser(data) {
  return prisma.user.create({ data });
}

module.exports = { getAllUsers, getUserById, createUser };
