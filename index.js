const fs = require('fs');
const express = require('express');
const cors = require('cors');
const getProdutcs = require('./routes/getProducts');


const app = express();
const portal = 8020;

app.listen(8020, ()=>{
    console.log(`Tudo ok, porta` + portal)
})

app.use(cors())
getProdutcs(app)

app.route('/').get((req, res)=>{ 
    res.send('Tudo ok');
})

module.exports = app;