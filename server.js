const express = require('express');

const { router } = require('./routes/todoRoutes')

const app = express();

app.use(express.json());

app.use('/', router);


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