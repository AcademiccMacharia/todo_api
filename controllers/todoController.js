const todoTasks = require('../data');

module.exports = {
    home: (req, res) => {
        res.send('Welcome to the beginning of an era')
    },

    getAllTodos: (req, res) => {
        res.json({
            statusCode: 'success',
            message: 'fetched todos successfully',
            results: todoTasks
        })
    },

    postATodo: (req, res) => {
        todoTasks.push(req.body);
        console.log(todoTasks);
        res.status(201).json({
            statusCode: 'success',
            message: 'todo added successfully',
            results: req.body
        })
    },

    deleteTodo: (req, res) => {
        const id = req.params.id;
        const index = todoTasks.findIndex(todo => todo.id === Number(id));
        todoTasks.splice(index, 1);
        res.status(202).json({
            statusCode: 'success',
            message: 'todo deleted successfully',
            results: todoTasks
        })
    },
    singleTodo: (req, res) => {
        const id = req.params.id;
        const todo = todoTasks.find(todo => todo.id === Number(id));
        if (id > todoTasks.length) {
            return res.status(404).json({
                statusCode: 'fail',
                message: 'todo not found'
            })
        } else {
            res.status(200).json({
                statusCode: 'success',
                message: 'todo fetched successfully',
                results: todo
            })
        }
    }
}