it("Should allow binding on native methods", function() {
	var newThis = [1, 2, 3, 4];
	var join = Array.prototype.join.bind(newThis);
	expect(join(',')).to.be('1,2,3,4');
});

it("Should allow binding on primitive 'constructors'", function() {
	expect(String(new (String.bind(null, 'test')))).to.be("test");
});

