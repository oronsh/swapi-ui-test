define(['controllers/controller', 'utils', 'views/index'], function(Controller, utils, IndexView) {
    'use strict';
    
    function IndexController() {

	var self = this;
	
	self.rootContainer = document.getElementById('root');
	self.setView(IndexView(), self.rootContainer);

	self.togglerBtn = document.getElementById('toggler-btn');
	self.menu = document.getElementById('navbarSupportedContent');
	
	self.bind('onMenuOpen', function() {
	    self.onMenuOpen();
	});

    }

    utils.inherits(IndexController, Controller);

        
    IndexController.prototype.onMenuOpen = function() {
	$on(this.togglerBtn, 'click', function(e) {
	    var state = this.menu.style.display;
	    this.menu.style.display = state === 'block' ? 'none' : 'block';
	}.bind(this));
    }
    
    return IndexController;

});
