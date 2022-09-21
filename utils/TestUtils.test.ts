import { TestUtils } from ".";

describe("TestUtils", () => {
  describe("removeAllSpaces", () => {
    test("Space removal", () => {
      const str = "h e l lo";
      const expectedStr = "hello";

      const result = TestUtils.removeAllSpaces(str);

      expect(result).toEqual(expectedStr);
    });

    test("No space removal", () => {
      const expectedStr = "hello";

      const result = TestUtils.removeAllSpaces(expectedStr);

      expect(result).toEqual(expectedStr);
    });
  });
});
