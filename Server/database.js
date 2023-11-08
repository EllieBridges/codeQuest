const { Pool } = require('pg');

const dbClient = new Pool({
    user: 'postgres',
    password: 'password',
});

async function getUserByUsername(username) {
    const response = await dbClient.query('SELECT * FROM codequestusers WHERE username = $1', [username]);
    return response.rows[0] ?? null;
}

async function getTopScore(id) {
    const response = await dbClient.query('SELECT top_score FROM codequestusers WHERE user_id = $1', [id]);
    return response.rows[0].top_score ?? 'not available'; // fix to avoid using different data types return
}

async function updateTopScore(id, top_score) {
    await dbClient.query('UPDATE codequestusers SET top_score = $1 WHERE user_id = $2', [top_score, id])
}

module.exports = {
    getUserByUsername,
    getTopScore,
    updateTopScore
}

