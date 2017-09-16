define(['controllers/controller', 'views/partials/error', 'utils'], function(Controller, ErrorView, utils) {
    'use strict';

    function ErrorController() {
	this.container = document.getElementById('errors');
	this.mainContainer = document.getElementById('content');
    }

    utils.inherits(ErrorController, Controller);

    ErrorController.prototype.flash = function(error) {
	this.setView('', this.mainContainer);
	this.setView(ErrorView(error), this.container);
    }

    ErrorController.prototype.clear = function() {
	this.setView('', this.container);
    }
    
    return ErrorController;
});
