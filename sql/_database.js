const { Pool } = require('pg');
require('dotenv/config');

const pool = new Pool({
    host:process.env.PQ_HOST,
    port:5432,
    user:process.env.PQ_NAMEHOST,
    password:process.env.PQ_PASSWORD,
    database:process.env.PQ_DATABASE,
    ssl:false,
})


module.exports = pool;

