describe('Dice Calculator', function() {
	beforeEach(function() {
		calculator = new DiceCalculator();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ] ', function() {
		expect(calculator.add('[ 1, 2, 3, 4, 5 ]')).toEqual(6);
	});
});
