const dados = require('../sql/_select');
const app = require('../index');

const getProducts = (app)=>{
    app.route('/dados:?')
    .get(async(req, res)=>{
        const products = await dados();
        res.status(201).send(products);
    })
}

module.exports = getProducts;