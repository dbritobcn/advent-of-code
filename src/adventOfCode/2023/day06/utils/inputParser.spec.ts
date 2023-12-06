import { inputFixture, inputFixtureParsed } from "../test/fixture";
import { inputParser } from "./inputParser";

describe('Input parser', () => {
    it('should return the parsed data', () => {
        expect(inputParser(inputFixture)).toMatchObject(inputFixtureParsed);
    });
});