define(['controllers/controller', 'utils', 'views/home'], function(Controller, utils, HomeView) {
    'use strict';

    function HomeController() {
	this.container = document.getElementById('content');
	this.setView(HomeView(), this.container);
    }

    utils.inherits(HomeController, Controller);

    return HomeController;

});
