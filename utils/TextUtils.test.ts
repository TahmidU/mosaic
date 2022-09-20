import { TextUtils } from ".";

describe("TextUtils", () => {
  describe("fontImportancePlacer", () => {
    const font = `font-family: "Roboto", sans-serif;font-size: 11px;`;

    test("font-size and font-family important", () => {
      const expectedFont = `font-family: "Roboto", sans-serif !important;font-size: 11px !important;`;

      const result = TextUtils.fontImportancePlacer(font, [0, 1]);

      expect(result).toBe(expectedFont);
    });

    test("font-size importance", () => {
      const expectedFont = `font-family: "Roboto", sans-serif;font-size: 11px !important;`;

      const result = TextUtils.fontImportancePlacer(font, [1]);

      expect(result).toBe(expectedFont);
    });

    test("font-family importance", () => {
      const expectedFont = `font-family: "Roboto", sans-serif !important;font-size: 11px;`;

      const result = TextUtils.fontImportancePlacer(font, [0]);

      expect(result).toBe(expectedFont);
    });

    test("Invalid index", () => {
      const expectedFont = font;

      const result = TextUtils.fontImportancePlacer(font, [3, 7]);

      expect(result).toBe(expectedFont);
    });

    test("Invalid length", () => {
      const expectedFont = "";

      const result = TextUtils.fontImportancePlacer(font, [2, 3, 7]);

      expect(result).toBe(expectedFont);
    });
  });

  describe("dateFormatter", () => {
    test("Valid date", () => {
      const date = "2022-03-22";
      const expectedDate = "22-03-2022";

      const result = TextUtils.dateFormatter(date);

      expect(result).toBe(expectedDate);
    });

    test("Short invalid date", () => {
      const date = "22-03";
      const expectedDate = date;

      const result = TextUtils.dateFormatter(date);

      expect(result).toBe(expectedDate);
    });
  });

  describe("findInCrewNamesByJob", () => {});

  describe("numberWithCommas", () => {
    test("Add commas to number, short number", () => {
      const number = 234;
      const expectedNumber = "234";

      const result = TextUtils.numberWithCommas(number);

      expect(result).toEqual(expectedNumber);
    });

    test("Add commas to number, long number", () => {
      const number = 100555223;
      const expectedNumber = "100,555,223";

      const result = TextUtils.numberWithCommas(number);

      expect(result).toEqual(expectedNumber);
    });
  });
});

export {};
