/* eslint-disable @next/next/no-img-element */

import {
  MenuContainer,
  NavbarContainer,
  OptionsContainer,
  SearchIcon,
} from "./styles";

import Logo from "../../../img/Logo";
import { ReactElement } from "react";

interface NavbarProps {}

export default function Navbar({}: NavbarProps): ReactElement {
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
