/* eslint-disable @next/next/no-img-element */

import { MenuContainer, NavbarContainer, SearchBtnStyle } from "./styles";
import { ReactElement, useContext } from "react";

import GlobalContext from "context/GlobalContext";
import Logo from "../../../img/Logo";

interface INavbarProps {}

export default function Navbar({}: INavbarProps): ReactElement {
  const { routes } = useContext(GlobalContext);

  return (
    <NavbarContainer>
      <div>
        <Logo onClick={routes?.goToHomePage} />
        <MenuContainer>{/* */}</MenuContainer>
      </div>

      <SearchBtnStyle />
    </NavbarContainer>
  );
}
