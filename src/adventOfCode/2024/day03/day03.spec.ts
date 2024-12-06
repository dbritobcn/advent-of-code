import { day03Part1 } from "./day03";

describe("2024 - day03", () => {
  it("Day03 - Part 01", () => {
    expect(
      day03Part1(
        "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
      )
    ).toBe(161);
  });
});
