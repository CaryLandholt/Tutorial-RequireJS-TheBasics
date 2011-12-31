require(['jquery', 'message', 'another-module'], function ($, message, anotherModule) {
	$('#output').html(message + ' ' + anotherModule);
});