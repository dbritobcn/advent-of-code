import { day11, expandUniverse, parseMap } from "./day11";
import { expandedMapFixture, inputFixture, universeFixture } from "./test/fixture";

describe('Day11', () => {
    it('should return part 1 successfully', () => {
        expect(day11(inputFixture)).toBe(374);
    });
    it('should return part 2 successfully', () => {
        expect(day11(inputFixture, 10)).toBe(1030);
        expect(day11(inputFixture, 100)).toBe(8410);
    });
});

describe('Expand Universe', () => {
    it('should expand successfully', () => {
        expect(expandUniverse(inputFixture)).toMatchObject(expandedMapFixture);
    });
});

describe('Parse Map', () => {
    it('should parse successfully', () => {
        expect(parseMap(expandedMapFixture)).toMatchObject(universeFixture);
    });
});