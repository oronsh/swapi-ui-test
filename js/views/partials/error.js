define([], function() {
    'use strict';

    return function(error) {

	if(!error) return '';
	
	return (
	    '<div class="alert alert-danger" role="alert">'
		+error
		+'</div>'
	);
    }
});
