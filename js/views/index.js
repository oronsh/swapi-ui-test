// main view

define(['views/partials/header'], function(Header) {
    'use strict';
    
    return function(content) {

	content = content || '';
	
	return(
	    '<Header>'
	        + Header()
		+'</Header>'
		+ '<div class="container">'
		+ '<div id="errors"></div>'
		+ '<div id="content">'+content+'</div>'
		+ '</div>'
		+'</div>'
	);
    }
});
