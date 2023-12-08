import { day08Part1 } from "./day08";
import { inputFixture01, inputFixture02, inputFixtureParsed01, inputFixtureParsed02 } from "./test/fixture";
import { inputParser } from "./utils/inputParser";

jest.mock('./utils/inputParser', () => {
    return {
      inputParser: jest.fn(),
    };
  });

describe("Day 08", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 2", () => {
    (inputParser as jest.Mock).mockImplementation(() => inputFixtureParsed01);
    expect(day08Part1(inputFixture01)).toBe(2);
  });

  it('should return 6', () => {
    (inputParser as jest.Mock).mockImplementation(() => inputFixtureParsed02);
    expect(day08Part1(inputFixture02)).toBe(6);
  });
});
