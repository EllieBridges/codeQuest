const { Pool } = require('pg');

const dbClient = new Pool({
    user: 'postgres',
    password: 'password',
});

async function getUserByUsername(username) {
    const response = await dbClient.query('SELECT * FROM codequestusers WHERE username = $1', [username]);
    return response.rows[0] ?? null
}

module.exports = { getUserByUsername: getUserByUsername }