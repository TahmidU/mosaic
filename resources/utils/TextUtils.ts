/**
 *
 * @param font : font from IFonts;
 * @param indexes : 0 - font-family and 1 - font-size
 * @returns font-family + font-size string
 */
function fontImportancePlacer(font: string, indexes: number[]): string {
  if (indexes.length > 2) return "";

  return font
    .split(";")
    .map((f, index) => (indexes.includes(index) ? f + " !important" : f))
    .join(";");
}

function dateFormatter(date: string): string {
  const [year, month, day] = date.split("-");

  if (year && month && day) return `${day}-${month}-${year}`;

  return date;
}

const TextUtils = {
  dateFormatter,
  fontImportancePlacer,
};

export default TextUtils;
