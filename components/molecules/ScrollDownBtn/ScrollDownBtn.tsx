import {
  Container,
  DownArrows,
  IconsWrapper,
  LeftDownIcon,
  MouseIcon,
  RightDownIcon,
} from "./styles";

import { ReactElement } from "react";

interface IScrollDownBtn {
  to: string;
}

export default function ScrollDownBtn({ to }: IScrollDownBtn): ReactElement {
  return (
    <Container to={to} spy={true} smooth={true} duration={500}>
      <IconsWrapper>
        <DownArrows />
        <MouseIcon />
      </IconsWrapper>

      <span>SCROLL DOWN</span>
    </Container>
  );
}
