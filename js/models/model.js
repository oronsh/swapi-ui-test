/*
  Base Model Class
*/

define(['config', 'axios', 'controllers/error', 'storage'], function(config, axios, Error, Storage) {
    'use strict';

    function Model(service) {
	this.service = service; // set service (films, people, etc..)
	this.storage = new Storage('favorites');
	this.updateFavorites();
    }
    
    Model.prototype.fetch = function(method, params, callback) {

	var self = this;
	
	return axios.get(config.API_BASE_URL + '/' + method, {
	    params: params
	}).then(function(res) {
	    callback(res);
	    self.updateFavorites();
	}).catch(function(error) {

	    var ErrorHandler = new Error();
	    
	    var message = 'Something went wrong';
	    
	    if (error.response) {

		var detail = error.response.data.detail;
		message = error.response.status + ' ' + (detail || message);
		
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.status);
		console.log(error.response.headers);
	    } else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log(error.request);
	    } else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message);
	    }
	    
	    console.log(error.config);

	    // flash the error
	    ErrorHandler.flash(message);
	});
    }

    /* 
       update favorites from storage
    */
    Model.prototype.updateFavorites = function() {
	this.favorites = this.storage.read();
	this.favorites = (this.favorites && this.favorites[this.service]) ? this.favorites[this.service] : [];
    }


    /*
      insert and remove entity from storage
    */
    Model.prototype.toggleFavorite = function(id) {
	
	var favorites = this.storage.read();

	if(!favorites[this.service]) {
	    favorites[this.service] = [];
	    favorites[this.service].push(id);
	} else {
	    var index_of_id = favorites[this.service].indexOf(id);
	    if(index_of_id !== -1) {
		favorites[this.service].splice(index_of_id, 1);
	    } else {
		favorites[this.service].push(id);
	    }
	}

	this.storage.write(favorites);
	this.updateFavorites();
    }
    
    return Model;
    
});
