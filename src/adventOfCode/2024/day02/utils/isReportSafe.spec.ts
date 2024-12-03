import { isReportSafe } from "./isReportSafe";

describe("isReportSafe", () => {
  it("should return true if the report is safe", () => {
    expect(isReportSafe([7, 6, 4, 2, 1])).toBe(true);
    expect(isReportSafe([1, 3, 6, 7, 9])).toBe(true);
  });

  it("should return false if the report is not safe", () => {
    expect(isReportSafe([1, 2, 7, 8, 9])).toBe(false);
    expect(isReportSafe([9, 7, 6, 2, 1])).toBe(false);
    expect(isReportSafe([1, 3, 2, 4, 5])).toBe(false);
    expect(isReportSafe([8, 6, 4, 4, 1])).toBe(false);
  });
});
