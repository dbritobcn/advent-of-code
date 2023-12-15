import { emptyRowsFixture, parsedMapFixture } from "../test/fixture";
import { getEmptyRows } from "./getEmptyRows";

describe("GetEmptyRows", () => {
  it("should detect empty rows and columns", () => {
    expect(getEmptyRows(parsedMapFixture)).toMatchObject(emptyRowsFixture);
  });
});
