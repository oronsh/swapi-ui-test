define(['controllers/controller', 'models/people', 'views/people', 'utils'], function(Controller, PeopleModel, PeopleView, utils) {
    'use strict';
    
    function PeopleController() {
	
	Controller.call(this, PeopleModel, PeopleView);

	this.model.get({}, this.render.bind(this));
	
	this.bind('toggleFavoritePeople', function() {
	    this.toggleFavorite('people');
	}.bind(this));
    }
    
    utils.inherits(PeopleController, Controller);

    return PeopleController;
});


