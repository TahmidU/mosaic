import { Container, LeftDownIcon, RightDownIcon } from "./styles";

import { ReactElement } from "react";

interface IScrollDownBtn {}

export default function ScrollDownBtn({}: IScrollDownBtn): ReactElement {
  return (
    <Container>
      <LeftDownIcon />
      <span>SCROLL DOWN</span>
      <RightDownIcon />
    </Container>
  );
}
