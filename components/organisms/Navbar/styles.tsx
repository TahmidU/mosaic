import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 68px;
  height: auto;

  div:first-child {
    display: inline-flex;
    align-items: center;
  }
`;
NavbarContainer.displayName = "NavbarContainer";

export const LogoContainer = styled.div`
  cursor: pointer;
  margin: 0 3rem 0 1.25rem;
`;
LogoContainer.displayName = "LogoContainer";

export const MenuContainer = styled.div`
  button {
    all: unset;
    font-family: ${({ theme }) => theme.fonts.main.roboto};
    font-size: ${({ theme }) => theme.fontSize.xbig};
    font-weight: bold;
    margin: 0 2rem;
    cursor: pointer;
  }

  @media (max-width: 961px) {
    display: none;
  }
`;
MenuContainer.displayName = "MenuContainer";

export const OptionsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 2%;
`;
OptionsContainer.displayName = "OptionsContainer";

export const SearchIcon = styled(BsSearch)`
  width: 28px;
  height: auto;
  cursor: pointer;

  @media (max-width: 961px) {
    display: none;
  }
`;
SearchIcon.displayName = "SearchIcon";

export const HamburgerMenuIcon = styled(AiOutlineMenu)`
  display: none;
  width: 28px;
  height: auto;
  color: ${({ theme }) => theme.reverseMain};
  padding: 2px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.reverseMain};
  cursor: pointer;

  @media (max-width: 961px) {
    display: block;
  }
`;
HamburgerMenuIcon.displayName = "HamburgerMenuIcon";
