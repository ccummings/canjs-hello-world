(function () {
	steal.config({
		map: {
			"*": {
				"jquery/jquery.js": "jquery",
				"can/util/util.js": "can/util/jquery/jquery.js"
			}
		},
		paths: {
			"jquery": "bower_components/jquery/dist/jquery.js",
			"can/": "bower_components/canjs/steal/canjs/"
		},
		shim: {
			jquery: {
				exports: "jQuery",
			}
		},
		root: steal.config('root').join('../../')
	});
})();
