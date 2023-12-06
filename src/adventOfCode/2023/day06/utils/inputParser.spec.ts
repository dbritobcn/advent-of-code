import { inputFixture, inputFixtureParsed, inputKerningFixtureParsed } from "../test/fixture";
import { inputParser } from "./inputParser";

describe('Input parser', () => {
    it('should return the parsed data', () => {
        expect(inputParser(inputFixture)).toMatchObject(inputFixtureParsed);
    });

    it('should return the parsed data with kerning', () => {
        expect(inputParser(inputFixture, true)).toMatchObject(inputKerningFixtureParsed);
    });
});