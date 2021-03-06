// just a very simple router

define(['domReady'], function(domReady) {
    'use strict';
    
    var routes = {};

    var _getRouteName = function() {
	return (document.location.hash || '#/').substring(1);
    }
    
    var _resolveRoute = function() {
	var route = _getRouteName();
	var handler = routes[route];
	if(handler) {
	    handler();
	} else if(routes['*']) {
	    routes['*']();
	}
    }
    
    function Router() {

    }

    Router.currentPage = function() {
	return _getRouteName().substring(1);
    }

    
    Router.prototype.on = function(route, handler) {
	routes[route] = handler;
	return this;
    }

    Router.prototype.resolve = function() {
	domReady(_resolveRoute);
	window.addEventListener('hashchange', _resolveRoute, false);
    }

    
    return Router;
    
});
