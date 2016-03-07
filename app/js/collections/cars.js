define(['models/car', 'backbone'], function(Car, Backbone) {
   
    var Cars = Backbone.Collection.extend({
    	model: Car
    });
   
    return Cars; 
});