import HorizontalList from "./HorizontalList";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/HorizontalList",
  component: HorizontalList,
};
export default payload;

enum RandomEnum {
  FOO = "Foo",
  BAR = "Bar",
  FOOBAR = "FooBar",
}

export const Basic = (args: any) => {
  return (
    <HorizontalList
      title="Test"
      subListTitles={[RandomEnum.FOO, RandomEnum.BAR, RandomEnum.FOOBAR]}
      {...args}
    >
      <p>Test</p>
    </HorizontalList>
  );
};
Basic.args = {
  loading: false,
};
