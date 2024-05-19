describe('Dice Calculator', function() {
	beforeEach(function() {
		calculator = new DiceCalculator();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ] ', function() {
		expect(calculator.add('[ 1, 2, 3, 4, 5 ]')).toEqual(6);
	});
	it('should return 4 for [ 2, 2, 3, 3 ] ', function() {
		expect(calculator.add('[ 2, 2, 3, 3 ]')).toEqual(4);
	});

});
