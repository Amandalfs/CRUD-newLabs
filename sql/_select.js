const db = require('./_database');

async function selectTables(){
    await db.connect();
    const dados = await db.query('SELECT * FROM "public"."dadosnewlabs"');
    await db.end();
    return dados.rows
}

module.exports = selectTables;
