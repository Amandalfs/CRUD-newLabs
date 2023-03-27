const db = require('./_database');

async function insertTable(){
    await db.connect();
    await db.query(`INSERT INTO dadosnewLabs VALUES('PC Gamer Tier S', 3078.78, false, 4, 'I7 GTX 1650 16gb SSD 250Gb fonte 750W', 5);`)
    await db.end();
    await console.log('Dados inseridos');

}

insertTable()