export const allSpaceRegex = /[ ]/g;

export const removeAllSpaces = (str: string) => str.replace(allSpaceRegex, "");

const TestUtils = { allSpaceRegex, removeAllSpaces };

export default TestUtils;
