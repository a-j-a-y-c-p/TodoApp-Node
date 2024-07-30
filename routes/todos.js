const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const todosFilePath = path.join(__dirname, '../data/todos.json');

// Helper function to read the todos from the JSON file
function readTodos() {
  const todosData = fs.readFileSync(todosFilePath);
  return JSON.parse(todosData);
}

// Helper function to write the todos to the JSON file
function writeTodos(todos) {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
}

// Get all todos
router.get('/', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// Add a new todo
router.post('/', (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    task: req.body.task,
    completed: false
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});


module.exports = router;
