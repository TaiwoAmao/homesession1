/**
 * Created by TimmyBoi on 2/11/2017.
 */
describe("getPrimes", function() {
    it("should return [] if 1 is supplied as input", function() {
        expect(getPrimes(1)).toEqual("[]");
    });
    it("should determine S is not a number", function() {
        expect(getPrimes("S")).toEqual("Kindly supply a valid number!");
    });
    it("should determine prime numbers between 2 and 4", function() {
        expect(getPrimes(4)).toEqual([2, 3]);
    });
    it("should determine prime numbers between 2 and 7", function() {
        expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
    });
    it("should return 2 when 2 is inputed", function() {
        expect(getPrimes(2)).toEqual([2]);
    });

});
