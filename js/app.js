define(['router', 'controllers/controller', 'controllers/index'], function(Router, Controller, IndexController) {
    'use strict';
    
    function App() {
	this.router = new Router();
    }

    App.prototype.controller = function(ctrl_name) {
	Controller.initPage(); // init page 
	require(['controllers/'+ctrl_name], function(ctrl_name) {
	    return new ctrl_name();
	});
    }
    
    App.prototype.run = function() {
	new IndexController(); // init index controller
	this.router.resolve();
    }
    
    return App;
    
});
