import { inputFixture, inputFixtureRead } from "../test/fixture";
import { getReports } from "./getReports";

describe("getReports", () => {
  it("should return the reports", () => {
    expect(getReports(inputFixture)).toEqual(inputFixtureRead);
  });
});
