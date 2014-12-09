(function(support, html, a) {
	function onfocusin() {
		console.log('focusin fired in feature detect');
		a.removeEventListener('focusin', onfocusin);
		support = true;
	}

	if (html) {
		a.href = '#';
		console.log('Running feature detect with', html, a);
		a.addEventListener('focusin', onfocusin);
		html.appendChild(a).focus();
		html.removeChild(a);
	}

	console.log('Returning feature support:', support);
	return support;
})(false, document.documentElement, document.createElement('a'))
