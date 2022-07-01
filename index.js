require('dotenv').config();
const express = require('express');
const app = express();
const userController = require('./src/controllers/users');

app.use(express.json());

app.use('/api/users', userController);

//more routes or middlewares

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 4000}`);
});