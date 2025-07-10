const Task = require('../models/taskModel');

// GET all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error('🔥 Error in getTasks:', error.message); // 👈 this shows the actual reason
    res.status(500).json({ error: 'Failed to fetch tasks', details: error.message }); // 👈 return it in response too
  }
};


// POST new task
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// PUT update task
const updateTask = async (req, res) => {
  const { id } = req.params;
  await Task.update(req.body, { where: { id } });
  const updated = await Task.findByPk(id);
  res.json(updated);
};

// DELETE task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.json({ message: 'Task deleted' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
