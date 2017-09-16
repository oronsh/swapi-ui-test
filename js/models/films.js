define(['models/model', 'utils'], function(Model, utils, Error) {

    function Films() {
	Model.call(this, 'films');
    }

    utils.inherits(Films, Model);
    
    Films.prototype.get = function(params, callback) {

	var self = this;
	
	this.fetch(this.service + '/', params, function(res) {
	    var data = res.data;
	    var rows = [];
	    
	    for(var i=0; i < data.results.length; i++) {

		var id = getId(data.results[i].url);
		
		rows.push({
		    id: id,
		    title: data.results[i].title,
		    director: data.results[i].director,
		    producer: data.results[i].producer,
		    url: data.results[i].url,
		    favorite: (self.favorites.indexOf(id) !== -1) ? true : false
		});
	    }

	    callback({
		count: data.count,
		next: data.next,
		previous: data.previous,
		rows: rows
	    });
	    
	});
    }

    return Films;
    
});
