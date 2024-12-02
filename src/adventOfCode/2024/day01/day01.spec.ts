import { day01Part1, day01Part2, inputParser, inputReader, sort } from "./day01";
import {
  inputFixture,
  inputFixtureParsed,
  inputFixtureRead,
  inputFixtureSorted,
} from "./test/fixture";

describe("2024 - day01", () => {
  describe("InputReader", () => {
    it("should return the input data and return the two columns", () => {
      expect(inputReader(inputFixture)).toEqual(inputFixtureRead);
    });
  });

  describe("InputParser", () => {
    it("should return the parsed input data", () => {
      expect(inputParser(inputFixtureRead)).toEqual(inputFixtureParsed);
    });
  });

  describe("Sort", () => {
    it("should return the sorted input data", () => {
      expect(sort(inputFixtureParsed)).toEqual(inputFixtureSorted);
    });
  });

  describe("Day01", () => {
    it("Part 1", () => {
      expect(day01Part1(inputFixture)).toBe(11);
    });

    it("Part 2", () => {
      expect(day01Part2(inputFixture)).toBe(31);
    })
  });
});
