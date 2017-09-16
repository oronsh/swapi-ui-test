// header view

define([], function() {
    return function(props) {
	return (
	    '<nav class="navbar navbar-expand-lg navbar-light bg-light">'
		+ '<div class="container">'
		+ '<a id="brand" class="navbar-brand" href="#">Swapi UI</a>'
		+ '<button id="toggler-btn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'
		+'<span class="navbar-toggler-icon"></span>'
		+'</button>'
		+'<div class="collapse navbar-collapse" id="navbarSupportedContent">'
		+'<ul class="navbar-nav mr-auto">'
		+'<li class="nav-item">'
		+'<a class="nav-link" href="#/films">Films</a>'
		+'</li>'
		+'<li class="nav-item">'
		+'<a class="nav-link" href="#/characters">Characters</a>'
		+'</li>'
		+'</ul>'
		+'</div>'
		+'</div>'
		+'</nav>'
	);
    }
});
