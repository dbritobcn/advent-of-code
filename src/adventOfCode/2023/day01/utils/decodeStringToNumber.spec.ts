import { decodeStringToNumber } from "./decodeStringToNumber";

describe('decodeStringToNumber', () => {
    it('should resolve a correct string', () => {
        expect(decodeStringToNumber('two1nine')).toBe('tw2o1ni9ne');
        expect(decodeStringToNumber('eightwothree')).toBe('eig8htw2othr3ee');
        expect(decodeStringToNumber('abcone2threexyz')).toBe('abco1ne2thr3eexyz');
        expect(decodeStringToNumber('xtwone3four')).toBe('xtw2o1ne3fo4ur');
        expect(decodeStringToNumber('4nineeightseven2')).toBe('4ni9neeig8htse7ven2');
        expect(decodeStringToNumber('zoneight234')).toBe('zo1neig8ht234');
        expect(decodeStringToNumber('7pqrstsixteen')).toBe('7pqrsts6ixteen');
        expect(decodeStringToNumber('7pqrstteen')).toBe('7pqrstteen');
        expect(decodeStringToNumber('99lbqpxzzlbtvkmfrvrnmcxttseven')).toBe('99lbqpxzzlbtvkmfrvrnmcxttse7ven');
    });
});