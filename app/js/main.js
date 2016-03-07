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
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },


    paths: {
        jquery: '../components/jquery/dist/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        hbs: '../components/require-handlebars-plugin/hbs',
        handlebars: '../components/handlebars/handlebars',
        bootstrap: '../components/bootstrap-css/js/bootstrap.min'
    }
});

require([
    'jquery',
    'backbone',
    'models/car',
    'views/car',
    'collections/cars',
    'views/cars',
    'bootstrap'
], function($, Backbone, Car, CarView, Cars, CarsView) {

    /*jshint nonew:false*/
    var car1 = new Car({ model: "Mers", mark: "w222" });
    var car2 = new Car({ model: "Mers", mark: "w222" });
    var car3 = new Car({ model: "Mers", mark: "w222" });
    var carView = new CarView({model: car1});
    console.log(carView.render().el);
    var coll = new Cars();
    coll.add(car1);
    coll.add(car2);
    coll.add(car3);
    var carsView = new CarsView({collection: coll});
});
