const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://admin:123456789aA@cluster0.gucjumm.mongodb.net/')
.then(()=>console.log('Database connected successfully'))
.catch(err=>console.log(err))

app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);

module.exports = app;
