/*
  Create new App instance and set routes with controllers
*/

require(['app'], function(App) {
    'use strict';
    
    var swapi = new App();
    
    swapi.router
	.on('/', function() {
	    swapi.controller('home');
	})
	.on('/characters', function() {
	    swapi.controller('people');	
	}).on('/films', function() {
	    swapi.controller('films');
	})
	.on('*', function() {
	    swapi.controller('notfound');
	});

    swapi.run();
    
});
