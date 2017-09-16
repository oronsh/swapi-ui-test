define(['controllers/controller', 'models/films', 'views/films', 'utils'], function(Controller, FilmsModel, FilmsView, utils) {
    'use strict';
    
    function FilmsController() {
	
	Controller.call(this, FilmsModel, FilmsView);
	
	this.model.get({}, function(data) {
	    this.setView(this.view(data), this.container);
	}.bind(this));
	
	this.bind('toggleFavoriteFilms', function() {
	    this.toggleFavorite('films');
	}.bind(this));
    }
    
    utils.inherits(FilmsController, Controller);

    return FilmsController;
});
