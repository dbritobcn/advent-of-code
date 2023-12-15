import { inputFixture, parsedMapFixture } from "../test/fixture";
import { parseMap } from "./parseMap";

describe("Parse Map", () => {
  it("should parse successfully", () => {
    expect(parseMap(inputFixture)).toMatchObject(parsedMapFixture);
  });
});
