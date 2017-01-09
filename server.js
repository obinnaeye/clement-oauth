'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongo = require('mongoose');

//var path = require("path");

var app = express();

mongo.connect('mongodb://localhost:27017/clementinejs');

 //bind reference to public and controllers folders, otherwise images and other items may not be rendered
    app.use('/public', express.static(process.cwd() + '/public'));

    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app);

    app.listen(process.env.PORT, function () {
        console.log('Listening on port ', process.env.PORT);
    });
