const express = require('express');
const { getAllTodos, home, postATodo, deleteTodo, singleTodo } = require('../controllers/todoController');

const router = express.Router();


router.get('/', home)
router.get('/todoTasks', getAllTodos)
router.get('/todoTasks/:id', singleTodo)
router.post('/todoTasks', postATodo)
router.delete('/todoTasks/:id', deleteTodo)

module.exports = {
    router
};