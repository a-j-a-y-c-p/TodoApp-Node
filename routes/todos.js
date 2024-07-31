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

// Delete a todo
router.delete('/:id', (req, res) => {
    const todos = readTodos();
    const todoId = parseInt(req.params.id, 10);
    const newTodos = todos.filter(todo => todo.id !== todoId);
  
    if (todos.length !== newTodos.length) {
      writeTodos(newTodos);
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });

  // Update a todo
router.put('/:id', (req, res) => {
    const todos = readTodos();
    const todoId = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
  
    if (todoIndex !== -1) {
      todos[todoIndex].task = req.body.task;
      todos[todoIndex].completed = req.body.completed;
      writeTodos(todos);
      res.json(todos[todoIndex]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });


module.exports = router;
