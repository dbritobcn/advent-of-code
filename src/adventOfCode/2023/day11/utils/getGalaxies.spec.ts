import { parsedMapFixture, universeFixture } from "../test/fixture";
import { getGalaxies } from "./getGalaxies";

describe("Expand Universe", () => {
  it("should expand successfully", () => {
    expect(getGalaxies(parsedMapFixture)).toMatchObject(universeFixture);
  });
});
