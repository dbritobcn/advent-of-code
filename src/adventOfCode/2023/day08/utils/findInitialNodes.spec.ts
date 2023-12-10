import { inputWithGhostsParsed } from "../test/fixture";
import { findInitialNodes } from "./findInitialNodes";

describe("Find initial nodes", () => {
  it("should find initial nodes successfully", () => {
    expect(findInitialNodes(inputWithGhostsParsed)).toMatchObject(['11A', '22A']);
  });
});
