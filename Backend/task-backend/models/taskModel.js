const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  assignedTo: DataTypes.STRING,
  status: { type: DataTypes.STRING, defaultValue: 'Not Started' },
  dueDate: DataTypes.DATEONLY,
  priority: { type: DataTypes.STRING, defaultValue: 'Normal' },
  comments: DataTypes.TEXT
},
{
  timestamps:false
});

module.exports = Task;
