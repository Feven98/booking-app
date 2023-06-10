const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/signup', (req,res) => {
    const {username,email,newpassword,password} = req.body;
    res.json(username,email,newpassword,password);
});

app.listen(4000);