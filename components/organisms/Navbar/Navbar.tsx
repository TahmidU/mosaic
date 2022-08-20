/* eslint-disable @next/next/no-img-element */

import {
  LinkBtn,
  MenuContainer,
  NavbarContainer,
  SearchInputStyle,
} from "./styles";

import Logo from "../../../img/Logo";
import { ReactElement } from "react";
import useRoutes from "hooks/useRoutes";

interface INavbarProps {}

export default function Navbar({}: INavbarProps): ReactElement {
  const { homePageURL } = useRoutes();

  return (
    <NavbarContainer>
      <div>
        <LinkBtn href={homePageURL}>
          <Logo />
        </LinkBtn>

        <MenuContainer>{/* */}</MenuContainer>
      </div>

      <SearchInputStyle />
    </NavbarContainer>
  );
}
