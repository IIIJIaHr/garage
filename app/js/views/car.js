define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/cars.html',
    'hbs!templates/cars'
], function($, _, Backbone, Handlebars, carsTemplate, carsTemplateHbs) {
    var CarView = Backbone.View.extend({
        tagName: 'div',
        // template: Handlebars.compile(carsTemplate),
        template: carsTemplateHbs,
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return CarView;
});
