import { generateArrayVariants } from "./generateArrayVariants";

describe("generateArraysWithRemovedElements", () => {
    it("should return an array with all elements removed", () => {
      expect(generateArrayVariants([1, 2, 3])).toEqual([
        [1, 2, 3],
        [2, 3],
        [1, 3],
        [1, 2],
      ]);
    });
  });