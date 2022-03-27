const storyType = {
  atoms: "ATOMS",
  molecules: "MOLECULES",
  organisms: "ORGANISMS",
};

type StoryType = "ATOMS" | "MOLECULES" | "ORGANISMS";

function storyTitle(type: StoryType, title: string) {
  return `${type}/${title}`;
}

const StoryUtils = {
  storyTitle,
  storyType,
};

export default StoryUtils;
