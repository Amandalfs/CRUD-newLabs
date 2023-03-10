"use strict";
exports.__esModule = true;
var path_1 = require("path");
var fs = require('fs');
var app = require('../index.ts');
var filePath = (0, path_1.join)(__dirname, 'dados.json');
var getUsers = function () {
    var data = fs.readFileSync(filePath);
    return JSON.parse(data);
};
var getProdutcs = function (app) {
    app.route('/dados')
        .get(function (req, res) {
        var products = getUsers();
        res.status(201).send(products);
    });
};

