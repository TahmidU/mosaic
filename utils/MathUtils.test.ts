import { MathUtils } from ".";

describe("MathUtils", () => {
  describe("modCycle", () => {
    test("Modular cycle", () => {
      const expectedIteration: { [key: number]: number } = {
        0: 0,
        1: 1,
        2: 2,
        3: 0,
        4: 1,
        5: 2,
        6: 0,
        7: 1,
        8: 2,
        9: 0,
      };
      const mod = 3;
      const range = 10;

      for (let i = 0; i < range; i++) {
        const result = MathUtils.modCycle(i, mod);
        expect(result).toEqual(expectedIteration[i]);
      }
    });
  });

  describe("shortenRuntime", () => {
    test("Hours and minutes", () => {
      const expectedResult = "1hrs 11mins";
      const minutes = 71;

      const result = MathUtils.shortenRuntime(minutes);

      expect(result).toEqual(expectedResult);
    });

    test("Factor of hour", () => {
      const expectedResult = "2hrs 0mins";
      const minutes = 120;

      const result = MathUtils.shortenRuntime(minutes);

      expect(result).toEqual(expectedResult);
    });

    test("Less than an hour", () => {
      const expectedResult = "0hrs 40mins";
      const minutes = 40;

      const result = MathUtils.shortenRuntime(minutes);

      expect(result).toEqual(expectedResult);
    });
  });
});
