import { Container, OptionsWrapper, SearchInputStyle } from "./styles";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

import { ContainerAnimVariant } from "./animation-variants";
import Input from "components/atoms/Input";
import useRoutes from "hooks/useRoutes";

interface IFullScreenSearchMenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export default function FullScreenSearchMenu({
  setMenuOpen,
  isMenuOpen,
}: IFullScreenSearchMenuProps): ReactElement {
  const { goToSearchPage } = useRoutes();

  return (
    <Container
      variants={ContainerAnimVariant}
      initial={"close"}
      animate={isMenuOpen ? "open" : "close"}
      transition={{ ease: "easeIn", duration: 0.425 }}
    >
      <OptionsWrapper>
        <SearchInputStyle type="search" />
        <button onClick={() => setMenuOpen(false)}>Close</button>
      </OptionsWrapper>
    </Container>
  );
}
