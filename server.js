const express = require('express');

const { router } = require('./routes/todoRoutes')

const app = express();

app.use(express.json());

app.use('/', router);

//updating a todo
// app.patch('/todoTasks/:id', (req, res)=>{
//     const id = req.params.id;
//     const index = todoTasks.findIndex(todo=>todo.id === Number(id));
//     todoTasks[index] = {...todoTasks[index], ...req.body};
//     res.status(200).json({
//         statusCode: 'success',
//         message: 'todo updated successfully',
//         results: todoTasks[index]
//     })
// }
//getting a single todo

app.use('*', (req, res)=>{
    res.status(404).json({
        statusCode: 'fail',
        message: 'resource not found'
    })
})


const port = 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})