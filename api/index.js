// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection

const { PORT, MONGODB_URI } = process.env;


const express = require('express');
const cors = require('cors');

const { default: mongoose } = require('mongoose');
const User = require('./models/user.js')
const bcrypt = require('bcryptjs');
// const bcryptjs = require("bcryptjs");
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

// app.use(express.json());
// app.use(cors({
//     credentials: true,
//     origin: 'http://127.0.0.1:5173',
// }));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/signup', async (req,res) => {
    const {username,email,password} = req.body;
    const userInfo = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userInfo);
});

app.listen(4000);