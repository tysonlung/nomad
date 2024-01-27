const mongoose = require('mongoose');
const User = require('./models/user');
const Post = require('./models/post');

const express = require('express');

const app = express();

app.use(express.json());



mongoose
.connect('mongodb+srv://jmayhugh:ho5ZYo2jGq7fxh4Z@cluster0.siiprmi.mongodb.net/?retryWrites=true&w=majority')
.then(() => app.listen(4000, () => console.log('Server running on port 4000')))
.catch((error) => console.log(error.message));