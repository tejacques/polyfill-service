var el;

beforeEach(function(){
	el = document.createElement('div');
	document.body.appendChild(el);
});

afterEach(function(){
	document.body.removeChild(el);
	el = null;
});

it('Should be able to update the dataset when a new data- attribute is added', function(){
	el.setAttribute('data-foo', 'bar');
	expect(el.dataset.foo).to.equal('bar');
});

it('Should be able to update the dataset when a data- attribute is edited', function(){
	el.setAttribute('data-foo', 'bar');
	expect(el.dataset.foo).to.equal('bar');
	el.setAttribute('data-foo', 'bof');
	expect(el.dataset.foo).to.equal('bof');
});

it('Should be able to update the dataset when a data- attribute is removed', function(){
	el.setAttribute('data-foo', 'bar');
	expect(el.dataset.foo).to.equal('bar');
	el.removeAttribute('data-foo');
	expect(el.dataset.foo).not.to.exist;
});

it('Should be able to add a new data- attribute when a new item is added to the dataset', function(){
	el.dataset['foo'] = 'bar';
	expect(el.getAttribute('data-foo')).to.equal('bar');
});

it('Should be able to edit the data-attribute when a dataset item is edited', function(){
	el.dataset['foo'] = 'bar';
	expect(el.getAttribute('data-foo')).to.equal('bar');
	el.dataset['foo'] = 'bof';
	expect(el.getAttribute('data-foo')).to.equal('bof');
});

it('Should be able to remove a data- attribute when an item is removed from the dataset', function(){
	el.dataset['foo'] = 'bar';
	expect(el.getAttribute('data-foo')).to.equal('bar');
	delete el.dataset.foo;
	expect(el.getAttribute('data-foo')).to.be.null;
});
