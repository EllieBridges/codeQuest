const express = require('express');

const app = express();

const port = 3001;

const cors = require('cors');

const jwt = require('jsonwebtoken');

// Database
const dbFuncs = require('./database');

const jwtKey = 'Melons'


// Middleware

app.use(express.json());

app.use(cors());

app.listen(port, () => {
    console.log('Server is working');
});


let users = [{ id: 1, username: 'Ellie1', password: 'secrets', level: 'beginner', topScore: '10' }]


// Authenticate an existing user

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, jwtKey);

    return res.status(200).json({ message: "Authentication successful", token });
});



app.post('/score', (req, res) => {
    const { score } = req.body;
    console.log(req.headers)



    const token = jwt.verify(req.headers.authorization, jwtKey)
    console.log('token', token)
    const user = users.find((user) => token.username === user.username)
    console.log(user)
    let message = ''

    if (score > user.topScore) {
        // save score
        message = "You beat your top score"
    }
    else {
        message = "Try to beat your top score!"
    }

    return res.status(200).json({ message })



})