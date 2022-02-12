export const titles = {
  atoms: "ATOMS",
  molecules: "MOLECULES",
  organisms: "ORGANISMS",
};

type StoryType = "ATOMS" | "MOLECULES" | "ORGANISMS";

export function storyTitle(type: StoryType, title: string) {
  return `${type}/${title}`;
}
