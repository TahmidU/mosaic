import { Container, OptionsWrapper } from "./styles";
import { ReactElement, useState } from "react";

import Input from "components/atoms/Input";
import useRoutes from "hooks/useRoutes";

interface IFullScreenSearchMenuProps {}

export default function FullScreenSearchMenu({}: IFullScreenSearchMenuProps): ReactElement {
  const { goToSearchPage } = useRoutes();
  const [test, setTest] = useState("FooBar");

  return (
    <Container>
      <OptionsWrapper>
        <Input type="search" />
        <p>{test}</p>
      </OptionsWrapper>
    </Container>
  );
}
