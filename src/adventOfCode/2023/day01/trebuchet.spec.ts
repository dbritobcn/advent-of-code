import { trebuchet } from "./trebuchet";

describe("Trebuchet", () => {
    it("should resolve a correct string", () => {
      expect(trebuchet("1abc2")).toBe(12);
      expect(trebuchet("pqr3stu8vwx")).toBe(38);
      expect(trebuchet("a1b2c3d4e5f")).toBe(15);
      expect(trebuchet("treb7uchet")).toBe(77);
      expect(trebuchet("two1nine")).toBe(29);
      expect(trebuchet("eightwothree")).toBe(83);
      expect(trebuchet("abcone2threexyz")).toBe(13);
      expect(trebuchet("xtwone3four")).toBe(24);
      expect(trebuchet("4nineeightseven2")).toBe(42);
      expect(trebuchet("zoneight234")).toBe(14);
      expect(trebuchet("7pqrstsixteen")).toBe(76);
      expect(trebuchet("lkdbjd5")).toBe(55);
      expect(trebuchet("8three27")).toBe(87);
      expect(trebuchet("99lbqpxzzlbtvkmfrvrnmcxttseven")).toBe(97);
      expect(trebuchet("49threenjdgrmgfnfhcgz")).toBe(43);
      expect(trebuchet("fourmsmjqfmbjvtwosevendcljsdcstl3one")).toBe(41);
      expect(trebuchet("four98")).toBe(48);
      expect(trebuchet("4sevenfddxgcvdgx")).toBe(47);
      expect(trebuchet("dffmkvmhhdbzjcgrjc5132")).toBe(52);
      expect(trebuchet("onezvbhrblrkzcrsevensix96jnpxjone")).toBe(11);
    });
  
    it("should throw an error if no numbers are found", () => {
      expect(() => trebuchet("abc")).toThrow();
    });
  });