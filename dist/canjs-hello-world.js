/*!
* canjs-hello-world - v1.0.0
* 
* Copyright (c) 2014 Curtis Cummings
* Licensed MIT
*/
(function (global, plugin) {
	if (typeof define === 'function' && define.amd) {
		define(['can'], function (can) {
			return plugin(can || global.can);
		});
	} else if (typeof steal === 'function') {
		steal('can', function (can) {
			return plugin(can);
		});
	} else {
		plugin(global.can);
	}
}(this, function (can) {

	can.hello = function () {
		return 'Hello World';
	};

	return can;
}));
