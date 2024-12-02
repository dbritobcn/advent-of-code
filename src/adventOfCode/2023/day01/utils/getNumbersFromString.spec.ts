import { getNumbersFromString } from "./getNumbersFromString";

describe("getNumbersFromString", () => {
  it("should resolve a correct string", () => {
    expect(getNumbersFromString("1abc2")).toBe(12);
    expect(getNumbersFromString("pqr3stu8vwx")).toBe(38);
    expect(getNumbersFromString("a1b2c3d4e5f")).toBe(15);
    expect(getNumbersFromString("treb7uchet")).toBe(77);
    expect(getNumbersFromString("two1nine")).toBe(29);
    expect(getNumbersFromString("eightwothree")).toBe(83);
    expect(getNumbersFromString("abcone2threexyz")).toBe(13);
    expect(getNumbersFromString("xtwone3four")).toBe(24);
    expect(getNumbersFromString("4nineeightseven2")).toBe(42);
    expect(getNumbersFromString("zoneight234")).toBe(14);
    expect(getNumbersFromString("7pqrstsixteen")).toBe(76);
    expect(getNumbersFromString("lkdbjd5")).toBe(55);
    expect(getNumbersFromString("8three27")).toBe(87);
    expect(getNumbersFromString("99lbqpxzzlbtvkmfrvrnmcxttseven")).toBe(97);
    expect(getNumbersFromString("49threenjdgrmgfnfhcgz")).toBe(43);
    expect(getNumbersFromString("fourmsmjqfmbjvtwosevendcljsdcstl3one")).toBe(
      41
    );
    expect(getNumbersFromString("four98")).toBe(48);
    expect(getNumbersFromString("4sevenfddxgcvdgx")).toBe(47);
    expect(getNumbersFromString("dffmkvmhhdbzjcgrjc5132")).toBe(52);
    expect(getNumbersFromString("onezvbhrblrkzcrsevensix96jnpxjone")).toBe(11);
    expect(getNumbersFromString("8fmmthreeeight6five")).toBe(85);
    expect(getNumbersFromString("8fmmthreeeight6fiveight")).toBe(88);
  });

  it("should throw an error if no numbers are found", () => {
    expect(() => getNumbersFromString("abc")).toThrow();
  });
});
