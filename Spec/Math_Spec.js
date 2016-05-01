// tell jasmine where to find our code
var math = require('../Math');

describe("A program that does basic arithmetic", function ()  {
		it("can add the numbers together", function ()  {
			expect(math.add(3,5)).toBe(8);
		});

		it("can subtract the numbers together", function ()  {
			expect(math.subtract(3,5)).toBe(-2);
		});

		it("can multiply the numbers together", function ()  {
			expect(math.multiply(3,5)).toBe(15);
		});


		it("can divide the numbers together", function ()  {
			expect(math.divide(10,2)).toBe(5);
		});
});