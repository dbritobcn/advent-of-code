import { stringToNumber } from "./stringToNumbers";

describe('String to Numbers', () => {
    it('should resolve a correct string', () => {
        expect(stringToNumber('two1nine')).toBe('2two1nine9');
        expect(stringToNumber('eightwothree')).toBe('8eightwothree3');
        expect(stringToNumber('abcone2threexyz')).toBe('abc1one2three3xyz');
        expect(stringToNumber('xtwone3four')).toBe('x2twone3four4');
        expect(stringToNumber('4nineeightseven2')).toBe('49nineeightseven72');
        expect(stringToNumber('zoneight234')).toBe('z1oneight8234');
        expect(stringToNumber('7pqrstsixteen')).toBe('7pqrst6sixteen');
        expect(stringToNumber('7pqrstteen')).toBe('7pqrstteen');
        expect(stringToNumber('99lbqpxzzlbtvkmfrvrnmcxttseven')).toBe('99lbqpxzzlbtvkmfrvrnmcxtt7seven');
    });
});