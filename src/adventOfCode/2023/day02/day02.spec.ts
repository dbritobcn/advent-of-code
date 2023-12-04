import { day02Part1, day02Part2 } from "./day02";
import { inputFixture } from "./test/fixture";

describe('day02', () => {
    it('should part 1 return correctly', () => {
        expect(day02Part1(inputFixture)).toBe(8);
    });

    it('should part 2 return correctly', () => {
        expect(day02Part2(inputFixture)).toBe(2286);
    });
});