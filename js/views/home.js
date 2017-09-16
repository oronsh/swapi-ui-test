define([], function() {
    'use strict';

    return function(props) {
	return (
	    '<div>'
		+ '<h2>Welcome to Swapi UI</h2>'
		+ '<p>Please nevigate to '
		+ '<a href="#/films">Films</a> or '
		+ '<a href="#/characters">Characters</a>'
		+ '</p>'
		+ '</div>'
	);
    }
});
