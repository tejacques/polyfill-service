(function () {
	var forEach = [].forEach,
			regex = /^data-(.+)/,
			dashChar = /\-([a-z])/ig,
			el = document.createElement('div'),
			mutationSupported = false,
			match
			;

	function detectMutation() {
		mutationSupported = true;
		this.removeEventListener('DOMAttrModified', detectMutation, false);
	}

	function toCamelCase(s) {
		return s.replace(dashChar, function (m,l) { return l.toUpperCase(); });
	}

	function updateDataset() {
		var dataset = {};
		forEach.call(this.attributes, function(attr) {
			if (match = attr.name.match(regex))
				dataset[toCamelCase(match[1])] = attr.value;
		});
		return dataset;
	}

	el.addEventListener('DOMAttrModified', detectMutation, false);
	el.setAttribute('foo', 'bar');

	function defineElementGetter (obj, prop, getter) {
		if (Object.defineProperty) {
			Object.defineProperty(obj, prop,{
				get : getter
			});
		} else {
			obj.__defineGetter__(prop, getter);
		}
	}

	function getterFunctionWithMutation(){
		if (!this._datasetCache) {
			this._datasetCache = updateDataset.call(this);
		}
		return this._datasetCache;
	}

	var getterFunction = mutationSupported ? getterFunctionWithMutation : updateDataset;

	Object.defineProperty(Element.prototype, 'dataset', {
		get : getterFunction
	});

	document.addEventListener('DOMAttrModified', function (event) {
		if(event.attrName.indexOf('data') > -1){
			delete event.target._datasetCache;
		}
	}, false);
})();
