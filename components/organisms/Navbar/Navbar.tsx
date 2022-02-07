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
        <MenuContainer>
          <button>Movies</button>
          <button>TV Shows</button>
          <button>People</button>
        </MenuContainer>
      </div>
      <OptionsContainer>
        <SearchIcon />
      </OptionsContainer>
    </NavbarContainer>
  );
}
