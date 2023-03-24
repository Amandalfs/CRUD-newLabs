const pg = require('pg');
require('dotenv/config');

const client = new pg.Client ({
    host: process.env.PQ_NAMEHOST,
    user: process.env.PQ_DATABASE,
    database: process.env.PQ_HOST,
    password: process.env.PQ_PASSWORD,
    port: 5432,
    ssl: true
})

module.exports = client;

