define(['controllers/controller', 'utils', 'views/404'], function(Controller, utils, NotFound) {

    function NotFoundController() {
	this.container = document.getElementById('content');
	this.setView(NotFound(), this.container);
    }

    utils.inherits(NotFoundController, Controller);

    return NotFoundController;
})
