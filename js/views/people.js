define(['views/partials/pagination'], function(Pagination) {
    'use strict';

    return function(data) {

	var rows = data.rows;
	var next = data.next;
	var previous = data.previous;
	var page = next ? next - 1 : 1;
	    
	var tpl = '';

	tpl += '<h2>Characters - Page '+page+'</h2>'
	    + '<div class="row row-header">'
	    + '<div class="col-sm-1">Favorite</div>'
	    + '<div class="col-sm-4">Name</div>'
	    + '</div>';

	for(var i=0; i < rows.length; i++) {

	    var favClass = rows[i].favorite ? 'btn-outline-warning' : 'btn-outline-secondary';
	    
	    tpl += '<div class="row">'
		+ '<div class="col-sm-1">'
		+ '<button id="fav_people_'+rows[i].id+'"class="btn '+favClass+' fav_btn_people">'
		+ 'Like'
		+ '</button>'
		+'</div>'
	    + '<div class="col-sm-4">'+rows[i].name+'</div>'
		+ '</div>';
	}

	tpl += Pagination(next, previous);
	
	return tpl;
	
    }
});
