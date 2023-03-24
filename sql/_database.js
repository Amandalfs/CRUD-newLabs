const pg = require('pg');

const client = new pg.Client ({
    host: 'kandula.db.elephantsql.com',
    user: 'hptbrjiw',
    database: 'hptbrjiw',
    password: 'tfEdZGSBa2QCRpa0USa7GW_yZTQjvdBO',
    port: 5432,
    ssl: true
})

module.exports = client;

