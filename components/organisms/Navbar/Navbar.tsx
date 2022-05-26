/* eslint-disable @next/next/no-img-element */

import {
  MenuContainer,
  NavbarContainer,
  OptionsContainer,
  SearchIcon,
} from "./styles";

import Logo from "../../../img/Logo";
import { ReactElement } from "react";

interface INavbarProps {}

export default function Navbar({}: INavbarProps): ReactElement {
  return (
    <NavbarContainer>
      <div>
        <Logo />
        <MenuContainer>{/* */}</MenuContainer>
      </div>
      <OptionsContainer>
        <SearchIcon />
      </OptionsContainer>
    </NavbarContainer>
  );
}
