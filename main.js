require.config({
	paths:{
		'another-module': 'message'
	}
});

require(['jquery', 'message', 'another-module'], function ($, message, anotherModule) {
	$('#output').html(message + ' ' + anotherModule);
});
