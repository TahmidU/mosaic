/**
 *
 * @param font : font from IFonts;
 * @param indexes : 0 - font-family and 1 - font-size
 * @returns font-family + font-size string
 */
export function fontImportancePlacer(font: string, indexes: number[]): string {
  return font
    .split(";")
    .map((f, index) => (indexes.includes(index) ? f + " !important" : f))
    .join(";");
}
