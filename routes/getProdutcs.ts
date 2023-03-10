import { join } from "path";
const fs = require('fs');

const app = require('../index.ts');

const filePath = join(__dirname, 'dados.json');
const getUsers = ()=>{
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

const getProdutcs = (app)=>{
    app.route('/dados')
    .get((req, res)=>{
        const products:string = getUsers();
        res.status(201).send(products);
    })
}
