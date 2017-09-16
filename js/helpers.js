function getId(url) {
    var parts = url.split('/');
    return parts[parts.length-2];
}

function getPage(prop) {
    if(prop) {
	return prop.split('?page=')[1];
    }

    return null;
}

// Object.create polyfill
if (typeof Object.create !== 'function') {
    Object.create = function(o, props) {
	function F() {}
	F.prototype = o;

	if (typeof(props) === "object") {
	    for (prop in props) {
		if (props.hasOwnProperty((prop))) {
		    F[prop] = props[prop];
		}
	    }
	}
	return new F();
    };
}


// Get element(s) by CSS selector:
window.qs = function (selector, scope) {
    return (scope || document).querySelector(selector);
};
window.qsa = function (selector, scope) {
    return (scope || document).querySelectorAll(selector);
};

// addEventListener wrapper:
window.$on = function (target, type, callback, useCapture) {
    target.addEventListener(type, callback, !!useCapture);
};

// Attach a handler to event for all elements that match the selector,
// now or in the future, based on a root element

window.$delegate = function (target, selector, type, handler) {

    function dispatchEvent(event) {
	
	var targetElement = event.target;
	var potentialElements = window.qsa(selector, target);

	var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;
	
	if (hasMatch) {
	    handler.call(targetElement, event);
	}
    }

    // https://developer.mozilla.org/en-US/docs/Web/Events/blur
    var useCapture = type === 'blur' || type === 'focus';

    window.$on(target, type, dispatchEvent, useCapture);
};
