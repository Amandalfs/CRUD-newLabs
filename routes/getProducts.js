import { join } from "path";
const fs = require('fs');

const app = require('../index');

const filePath = join(__dirname, 'dados.json');
const getUsers = ()=>{
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

const getProducts = (app)=>{
    app.route('/dados:?')
    .get((req, res)=>{
        const products = getUsers();
       
        res.status(201).send(products);
    })
}

module.exports = getProducts;