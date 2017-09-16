define(['models/model', 'utils'], function(Model, utils, Error) {
    'use strict';
    
    function People() {
	Model.call(this, 'people');
    }

    utils.inherits(People, Model);

    People.prototype.get = function(params, callback) {

	var self = this;
	
	this.fetch(this.service + '/', params, function(res) {
		var data = res.data;
		var rows = [];
		
		for(var i=0; i < data.results.length; i++) {

		    var id = getId(data.results[i].url);
		    
		    rows.push({
			id: id,
			name: data.results[i].name,
			height: data.results[i].height,
			mass: data.results[i].mass,
			url: data.results[i].url,
			favorite: (self.favorites.indexOf(id) !== -1) ? true : false
		    });
		}

		callback({
		    count: data.count,
		    next: getPage(data.next),
		    previous: getPage(data.previous),
		    rows: rows
		});
		
	    });
    }

    return People;
    
});
