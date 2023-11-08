const express = require('express');

require('express-async-errors');

const app = express();

const port = 3001;


const cors = require('cors');


const jwt = require('jsonwebtoken');

const jwtKey = 'Melons'


// Database
const dbFuncs = require('./database');




// Middleware

app.use(express.json());

app.use(cors());


// Authenticate an existing user


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await dbFuncs.getUserByUsername(username);

    if (!user || user.pw !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, jwtKey);

    return res.status(200).json({ message: "Authentication successful", token });
});

app.get('/score', async (req, res) => {

    const token = jwt.verify(req.headers.authorization, jwtKey);

    const user = await dbFuncs.getUserByUsername(token.username);

    if (!user) {
        return res.status(401), json({ message: "No user exists" })
    }

    const score = await dbFuncs.getTopScore(user.user_id)

    return res.status(200).json({ message: "score returned", score });

})


app.post('/score', async (req, res) => {
    const { score } = req.body;
    console.log(req.headers)

    const token = jwt.verify(req.headers.authorization, jwtKey);
    console.log('token', token.username)

    const user = await dbFuncs.getUserByUsername(token.username);

    console.log('User', user)
    if (!user) {
        return res.status(401).json({ message: "No user exists" });
    }


    console.log('score', score)
    let message = ''

    if (score > user.top_score) {
        await dbFuncs.updateTopScore(user.user_id, score)
        message = "You beat your top score!"
    }
    else {
        message = "Try to beat your top score!"
    }

    return res.status(200).json({ message })
})


app.use((err, req, res, next) => {
    console.log(err)
    res.status(500);
    res.json({ error: err.message });

    next(err);
});


app.listen(port, () => {
    console.log('Server is working');
});