define(['views/index'], function(IndexView) {
    'use strict';
    
    return function() {
	return (
	    '<div class="alert alert-warning" role="alert">'
		+'the page you requested was not found'
		+'</div>'
	);
    }

});
