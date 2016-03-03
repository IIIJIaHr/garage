/*global require*/
'use strict';
// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    hbs: {
        templateExtension: 'html'
    },
    shim: {
        underscore: {
            exsports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
    },


    paths: {
        jquery: '../components/jquery/dist/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        hbs: '../components/require-handlebars-plugin/hbs',
        handlebars: '../components/require-handlebars-plugin/hbs/handlebars',
        text: '../components/text/text'
    }
});

require([
    'backbone',
    'views/car',
    'models/car',
    'jquery'
], function(Backbone, CarView, Car, $) {
    /*jshint nonew:false*/
    var car = new Car({ model: "Mers", mark: "w222" });
    var carView = new CarView({ model: car });
    $('body').append(carView.render().el);
});
