import { Container, LeftDownIcon, RightDownIcon } from "./styles";

import { ReactElement } from "react";

interface IScrollDownBtn {
  to: string;
}

export default function ScrollDownBtn({ to }: IScrollDownBtn): ReactElement {
  return (
    <Container to={to} spy={true} smooth={true} duration={500}>
      <LeftDownIcon />
      <span>SCROLL DOWN</span>
      <RightDownIcon />
    </Container>
  );
}
