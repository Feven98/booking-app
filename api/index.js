// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection


const { PORT, MONGODB_URI } = process.env;


const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));


app.get('/test', (req,res) => {
    res.json('test ok');
});

// XZgDPptjfX7eh9Fl

app.post('/signup', (req,res) => {
    const {username,email,newpassword,password} = req.body;
    res.json(username,email,newpassword,password);
});

app.listen(4000);