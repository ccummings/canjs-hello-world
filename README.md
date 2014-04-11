# canjs-hello-world

Example plugin generated using the canjs-plugin Yeoman generator.

## Download

- [production version](https://raw.github.com/ccummings/canjs-hello-world/master/dist/canjs-hello-world.min.js)
- [development version](https://raw.github.com/ccummings/canjs-hello-world/master/dist/canjs-hello-world.js)
- Install using bower:

	```bash
	$ bower install canjs-hello-world
	```

## Installation

This plugin requires CanJS and can be used with any AMD compliant loader like AMD or Steal. It can also be used stand alone without any loader.

### Stand alone

Simply include CanJS and a DOM manipulation library, jQuery in this case, and the plugin in your HTML:

```html
<!-- Dependencies. -->
<script src="path/to/jquery.js"></script>
<script src="path/to/canjs.jquery.js"></script>

<!-- canjs-hello-world -->
<script src="path/to/canjs-hello-world.js"></script>
```

### AMD

```js
define(['can', 'path/to/canjs-hello-world'], function(can){
	...
});
```

### Steal

```js
steal('can', 'path/to/canjs-hello-world', function(can){
	...
});
```

## Credits

This plugin was built with [generator-canjs-plugin](https://github.com/ccummings/generator-canjs-plugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)