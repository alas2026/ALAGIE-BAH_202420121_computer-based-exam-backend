const db = require('./users.db');

exports.getUsers = async (req, res) => {
  const users = await db.getAllUsers();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await db.getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.createUser = async (req, res) => {
  const user = await db.createUser(req.body);
  res.status(201).json(user);
};
