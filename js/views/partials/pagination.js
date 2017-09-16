define([], function() {
    'use strict';

    function disabled(prop) {
	return prop ? '' : 'disabled';
    }

    
    return function(next, previous) {
	return (
	    '<div class="btn-group pagination">'
		+ '<button id="prev-btn" class="btn btn-outline-primary" '+disabled(previous)+'>Previous</button>'
		+ '<button id="next-btn" class="btn btn-outline-primary '+disabled(next)+'">Next</button>'
	    + '</div>'
	);
    };
    
});
