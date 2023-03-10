const fs = require('fs');
const express = require('express');

const app = express();
const portal: number = 8020;

app.listen(8020, ()=>{
    console.log(`Tudo ok, porta` + portal)
})

app.route('/').get((req:string, res:string)=>{ 
    res.send('Tudo ok');
})

export = app;