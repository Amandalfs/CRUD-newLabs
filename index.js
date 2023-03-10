"use strict";
var fs = require('fs');
var express = require('express');
var app = express();
var portal = 8020;
app.listen(8020, function () {
    console.log("Tudo ok, porta" + portal);
});
app.route('/').get(function (req, res) {
    res.send('Tudo ok');
});
module.exports = app;
