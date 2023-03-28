const pool = require('./_database');

async function selectTables(){
    const dados = await pool.query('SELECT * FROM "public"."dadosnewlabs"');
    return dados.rows
}

module.exports = selectTables;
