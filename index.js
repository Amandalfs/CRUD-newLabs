const fs = require('fs');
const express = require('express');
const cors = require('cors');
const getProdutcs = require('./routes/getProducts');


const app = express();
app.use(cors())
const portal = 8020;

app.route('/').get((req, res)=>{ 
    res.send('Tudo ok');
})

getProdutcs(app)

app.listen(8020, ()=>{
    console.log(`Tudo ok, porta` + portal)
})

module.exports = app;