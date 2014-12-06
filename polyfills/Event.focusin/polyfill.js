this.addEventListener('focus', function (event) {
	console.log('focus detected in polyfill', event.target);
	event.target.dispatchEvent(new Event('focusin', {
		bubbles: true,
		cancelable: true
	}));
}, true);

this.addEventListener('blur', function (event) {
	console.log('blur detected in polyfill', event.target);
	event.target.dispatchEvent(new Event('focusout', {
		bubbles: true,
		cancelable: true
	}));
}, true);
