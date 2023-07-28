const express = require('express');

const app = express();

const port = 3001;

const cors = require('cors');

// Database
const dbFuncs = require('./database');


// Middleware

app.use(express.json());

app.use(cors());

app.listen(port, () => {
    console.log('Server is working');
});


// Define https endpoints
// Create a new user

// app.post('/signUp', async (req, res) => {
//     try {
//         const createUser = await dbFuncs.signUp(req.body.username, req.body.password);
//         console.log(createUser);
//     }
//     catch (err) { }
// }
// )

let users = [{ id: 1, username: 'Ellie1', password: 'secrets', level: 'beginner', topScore: '10' }]


// Authenticate an existing user

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Authentication successful', user });
});

