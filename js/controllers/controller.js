/*
  Base Controller Class
*/

define(['router'], function(Router) {
    'use strict';

    /*
      privates
    */
    
    var _container;
    var _rootContainer;
    var _errorsContainer;
    var _gifLoader;
    var _page;
    
    var _events = {};

    var _setView = function(view, elem) {
	elem.innerHTML = view;
    }

    var _showLoader = function() {
	_setView(_gifLoader, _container);
    }

    var _setActiveItem = function() {
	qsa('.nav-item').forEach(function(elm) {
	    var p = elm.children[0].getAttribute('href').substring(2);
	    if(p === _page && elm.className.indexOf('active') === -1) {
		elm.className += ' active'
	    } else {
		elm.className = 'nav-item';
	    }
	});
    }
    
    
    var _init = function() {
	_container = document.getElementById('content');
	_rootContainer = document.getElementById('root');
	_errorsContainer = document.getElementById('errors');
	_gifLoader = '<img src="images/ajax-loader.gif" />';
	_page = Router.currentPage();
	_setActiveItem();
    }
    
    function Controller(model, view) {
	this.model = model ? new model() : null;
	this.view = view || null;

	this.container = _container;
	this.rootContainer = _rootContainer;
	this.errorsContainer = _errorsContainer;
	this.gifLoader = _gifLoader;
	this.page = _page;
    }

    Controller.initPage = function() {
	_init();
	_setView('', _errorsContainer); // clear errors
	_showLoader(); // show loader 
    }
    
    Controller.prototype.setView = function(view, elem) {
	_setView(view, elem);
    }

    Controller.prototype.getPage = function() {
	return Router.currentPage();
    }

    Controller.prototype.clearErrors = function() {
	this.setView('', this.errorsContainer); // init errors
    }
    
    /*
      bind event once
    */
    Controller.prototype.bind = function(event, handler) {

	if(_events[event]) {
	    return;
	}
	
	handler();
	_events[event] = true;
	
    }

    /*
      favorite on/off
    */
    Controller.prototype.toggleFavorite = function(type) {

	var self = this;

	function handler(e) {
	    var id = e.target.id.split('_')[2];
	    var index = e.target.className.indexOf('secondary');

	    if(index !== -1) {
		e.target.className = e.target.className.replace('secondary', 'warning');
	    } else {
		e.target.className = e.target.className.replace('warning', 'secondary');
	    }

	    self.model.toggleFavorite(id);
	}

	// add click event for favorite button
	$delegate(this.container, '.fav_btn_' + type, 'click', handler);
    }

    /*
      render data from model
    */
    Controller.prototype.render = function(data) {
	this.data = data;

	this.setView(this.view(this.data), this.container);
	this.navigate();
    }

    /*
      handle pagination
    */
    Controller.prototype.navigate = function() {

	var self = this;
	
	var nextBtn = document.getElementById('next-btn');
	var prevBtn = document.getElementById('prev-btn');

	var next = this.data.next;
	var prev = this.data.previous;
	
	$on(nextBtn, 'click', function(e) {
	    if(!next) return;
	    _showLoader();	    
	    self.model.get({page: next}, self.render.bind(self));
	});

	$on(prevBtn, 'click', function(e) {
	    if(!prev) return;
	    _showLoader();
	    self.model.get({page: prev}, self.render.bind(self));
	});
	
    }
    
    return Controller;
    
});
