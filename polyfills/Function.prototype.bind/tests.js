it("Should allow binding on native methods", function() {
	var newThis = [1, 2, 3, 4];
	var join = Array.prototype.join.bind(newThis);
	expect(join(',')).to.be('1,2,3,4');
});
