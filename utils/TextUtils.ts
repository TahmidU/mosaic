import { ICrew } from "types/tv_movies";

/**
 *
 * @param font : font from IFonts;
 * @param indexes : 0 - font-family and 1 - font-size
 * @returns font-family + font-size string
 */
export function fontImportancePlacer(font: string, indexes: number[]): string {
  if (indexes.length > 2) return "";

  return font
    .split(";")
    .map((f, index) => (indexes.includes(index) ? f + " !important" : f))
    .join(";");
}

export function dateFormatter(date?: string) {
  if (!date) return date; //! Somehow an undefined date param is passed in storybook

  const [year, month, day] = date.split("-");

  if (year && month && day) return `${day}-${month}-${year}`;

  return date;
}

export function findInCrewNamesByJob(crew?: ICrew[], job?: string) {
  if (!crew || !job) return undefined;

  return crew
    .filter((_person) => _person.job === job)
    .map((_director) => _director.name)
    .join(", ");
}

export function numberWithCommas(x?: number): string {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
}

const TextUtils = {
  dateFormatter,
  fontImportancePlacer,
  findInCrewNamesByJob,
  numberWithCommas,
};

export default TextUtils;
