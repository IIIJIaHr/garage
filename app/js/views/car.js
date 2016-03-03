define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!templates/cars'
], function($, _, Backbone, Handlebars, carsTemplateHbs) {
    var CarView = Backbone.View.extend({
        tagName: 'div',
        template: carsTemplateHbs,
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return CarView;
});

'incar.js'
