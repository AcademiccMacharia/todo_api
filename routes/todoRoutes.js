const express = require('express');
const { getAllTodos, home, postATodo, deleteTodo, singleTodo, updateTodo } = require('../controllers/todoController');

const router = express.Router();


router.get('/', home)
router.get('/todoTasks', getAllTodos)
router.get('/todoTasks/:id', singleTodo)
router.post('/todoTasks', postATodo)
router.delete('/todoTasks/:id', deleteTodo)
router.patch('todoTasks/:id', updateTodo)

module.exports = {
    router
};