define(['controllers/error'], function(Error) {

    var ERROR_MESSAGE = 'Could not start storage';
    
    function _handleFactory() {
	if(!window.localStorage) {
	    // TODO: load some other storage engine
	    return;
	}

	// return default storage engine
	return window.localStorage;
    }
    
    function Storage(key) {
	this.handle = _handleFactory();
	this.key = key;
	this.errorHandler = new Error();
    }

    Storage.prototype.read = function() {
	try {

	    var data = JSON.parse(this.handle.getItem(this.key));
	    return data ? data : {};
	    
	} catch(e) {
	    this.errorHandler.flash(ERROR_MESSAGE);
	}
    }

    Storage.prototype.write = function(data) {
	data = JSON.stringify(data);

	try {
	    this.handle.setItem(this.key, data);
	} catch(e) {
	    this.errorHandler.flash(ERROR_MESSAGE);
	}
    }

    return Storage;
});
