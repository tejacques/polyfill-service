(function(support, html, a) {
	function onfocusin() {
		console.log('focusin fired in feature detect');
		a.removeEventListener('focusin', onfocusin);
		support = true;
	}
	console.log('Running feature detect', html, a);

	if (html) {
		a.href = '#';
		a.addEventListener('focusin', onfocusin);
		html.appendChild(a).focus();
		html.removeChild(a);
	}

	console.log('Returning feature support:', support);
	return support;
})(false, document.body, document.createElement('a'))
