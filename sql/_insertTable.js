const pool = require('./_database');

async function insertTable(){
    await pool.query(`INSERT INTO dadosnewLabs VALUES('PC Gamer Tier S', 3078.78, false, 4, 'I7 GTX 1650 16gb SSD 250Gb fonte 750W', 5);`)
    console.log('Dados inseridos');
}
