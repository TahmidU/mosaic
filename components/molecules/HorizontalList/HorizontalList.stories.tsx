import HorizontalList from "./HorizontalList";
import { IPayload } from "types/story";
import { useState } from "react";
import styled from "styled-components";
import Card from "components/atoms/Card";

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

export const CardWrapper = styled.div`
  display: inline-block;
  width: calc((100%) / 5);
  > div {
    margin: 0 auto;
  }

  @media only screen and (max-width: 912px) {
    width: calc((100%) / 4);
  }

  @media only screen and (max-width: 748px) {
    width: calc((100%) / 3);
  }

  @media only screen and (max-width: 568px) {
    width: calc((100%) / 2);
  }

  @media only screen and (max-width: 360px) {
    width: calc((100%) / 1);
  }
`;

export const Basic = (args: any) => {
  const [child, setChild] = useState("Foo");

  return (
    <HorizontalList
      title="Test"
      subListTitles={[RandomEnum.FOO, RandomEnum.BAR, RandomEnum.FOOBAR]}
      onSubTitleClick={(title) => {
        setChild(title);
      }}
      loadingElements={<span>loading...</span>}
      {...args}
    >
      {Array.from(Array(10).keys()).map((_item, index) => (
        <CardWrapper key={index}>
          <Card>{child}</Card>
        </CardWrapper>
      ))}
    </HorizontalList>
  );
};
Basic.args = {
  loading: false,
};
Basic.parameters = {
  controls: {
    include: ["loading", "title"],
  },
};
