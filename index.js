const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/songs', require('./back end/routes/songsRoutes'))


app.listen(port,()=> console.log(`Server started on port ${port}`))