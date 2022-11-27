const express = require('express')

// accessing the express
const app = express();

// for server Port
const PORT = process.env.PORT || 3000;

// for connection
require('./src/db/conn');


const RegStudentData = require('./src/models/students')
const studentRouter = require("./src/routers/myStudents")

// to regonize the json method
app.use(express.json());

app.use(studentRouter);


app.listen(PORT, (req, res) => {
    console.log('Server listening on: ' + PORT)
});