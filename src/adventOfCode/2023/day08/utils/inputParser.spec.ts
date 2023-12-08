import { inputFixture01, inputFixture02, inputFixtureParsed01, inputFixtureParsed02 } from "../test/fixture";
import { inputParser } from "./inputParser";

describe('Input parser', () => {
    it('should parse input', () => {
        expect(inputParser(inputFixture01)).toMatchObject(inputFixtureParsed01);
        expect(inputParser(inputFixture02)).toMatchObject(inputFixtureParsed02);
    });
});