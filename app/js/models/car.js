define([
    'backbone'
], function (Backbone) {
    var Car = Backbone.Model.extend({
        defaults:{
            mark: 'BMW',
            model: 'e90'
        }
    });
    return Car;
});g