/* eslint-disable @next/next/no-img-element */

import { MenuContainer, NavbarContainer, SearchBtnStyle } from "./styles";
import { ReactElement, useContext } from "react";

import GlobalContext from "context/GlobalContext";
import Logo from "../../../img/Logo";
import useRoutes from "hooks/useRoutes";

interface INavbarProps {}

export default function Navbar({}: INavbarProps): ReactElement {
  const { routes } = useContext(GlobalContext);
  const { goToSearchPage } = useRoutes();

  return (
    <NavbarContainer>
      <div>
        <Logo onClick={routes?.goToHomePage} />
        <MenuContainer>{/* */}</MenuContainer>
      </div>

      <SearchBtnStyle
        onEnter={(text) => goToSearchPage(text.length > 0 ? text : undefined)}
      />
    </NavbarContainer>
  );
}
