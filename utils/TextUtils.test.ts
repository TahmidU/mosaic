import { TextUtils } from ".";

describe("TextUtils", () => {
  describe("fontImportancePlacer", () => {
    const font = `font-family: "Roboto", sans-serif;font-size: 11px;`;

    test("font-size and font-family important", () => {
      // Given
      const expectedFont = `font-family: "Roboto", sans-serif !important;font-size: 11px !important;`;

      // When
      const result = TextUtils.fontImportancePlacer(font, [0, 1]);

      // Then
      expect(result).toBe(expectedFont);
    });

    test("font-size importance", () => {
      // Given
      const expectedFont = `font-family: "Roboto", sans-serif;font-size: 11px !important;`;

      // When
      const result = TextUtils.fontImportancePlacer(font, [1]);

      // Then
      expect(result).toBe(expectedFont);
    });

    test("font-family importance", () => {
      // Given
      const expectedFont = `font-family: "Roboto", sans-serif !important;font-size: 11px;`;

      // When
      const result = TextUtils.fontImportancePlacer(font, [0]);

      // Then
      expect(result).toBe(expectedFont);
    });

    test("Invalid index", () => {
      // Given
      const expectedFont = font;

      // When
      const result = TextUtils.fontImportancePlacer(font, [3, 7]);

      // Then
      expect(result).toBe(expectedFont);
    });

    test("Invalid length", () => {
      // Given
      const expectedFont = "";

      // When
      const result = TextUtils.fontImportancePlacer(font, [2, 3, 7]);

      // Then
      expect(result).toBe(expectedFont);
    });
  });

  describe("dateFormatter", () => {
    test("Valid date", () => {
      // Given
      const date = "2022-03-22";
      const expectedDate = "22-03-2022";

      // When
      const result = TextUtils.dateFormatter(date);

      // Then
      expect(result).toBe(expectedDate);
    });

    test("Short invalid date", () => {
      // Given
      const date = "22-03";
      const expectedDate = date;

      // When
      const result = TextUtils.dateFormatter(date);

      // Then
      expect(result).toBe(expectedDate);
    });
  });

  describe("findInCrewNamesByJob", () => {});

  describe("numberWithCommas", () => {});
});

export {};
