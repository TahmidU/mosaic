/* eslint-disable @next/next/no-img-element */

import {
  LogoContainer,
  MenuContainer,
  NavbarContainer,
  OptionsContainer,
  SearchIcon,
} from "./styles";

import Image from "next/image";
import { ReactElement } from "react";

interface NavbarProps {}

export default function Navbar({}: NavbarProps): ReactElement {
  return (
    <NavbarContainer>
      <div>
        <LogoContainer>
          <img alt="logo" src="/logo/logo.png" />
        </LogoContainer>
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
