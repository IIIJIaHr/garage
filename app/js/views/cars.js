define([
    'jquery',
    'underscore',
    'backbone',
    'views/car'
], function($, _, Backbone, CarView) {

    var CarsView = Backbone.View.extend({
    	el: '.cars',
        initialize: function (collection) {
        	this.render();
        },

        render: function() {
            this.collection.forEach(function(car, index) {
                this.renderOnes(car);
            }, this);
            return this;
        },

        renderOnes: function(car) {
            var carView = new CarView({ model: car });
            this.$el.append(carView.render().el);
        }
    });

    return CarsView;
});
