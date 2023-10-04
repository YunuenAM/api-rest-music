const express = require('express');
const colors = require ('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./back end/middleware/errorMiddleware');
const connectDB = require('./back end/config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json())
app.use (express.urlencoded({extended:false}))

app.use('/api/songs', require('./back end/routes/songsRoutes'))

app.use(errorHandler)


app.listen(port,()=> console.log(`Server started on port ${port}`))