import { expectedParse, inputFixture } from "../test/fixture";
import { gameParser } from "./gameParser";

describe("gameParser", () => {
  it("should parse correctly", () => {
    expect(gameParser(inputFixture)).toMatchObject(expectedParse);
  });
});
