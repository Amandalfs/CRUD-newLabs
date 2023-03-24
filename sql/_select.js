const db = require('./_database');

async function selectTables(){
    await db.connect();
    const dados = await db.query('SELECT * FROM "public"."dadosnewlabs"');
    return dados.rows
    await db.end();
}

module.exports = selectTables;
