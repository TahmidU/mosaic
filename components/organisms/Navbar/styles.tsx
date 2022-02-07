import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80px;
  height: auto;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: unset;
    align-items: center;
    width: 100%;

    > svg {
      width: 10%;
      height: auto;
      margin: 0 3rem 0 1.25rem;
      cursor: pointer;
    }
  }
`;
NavbarContainer.displayName = "NavbarContainer";

export const LogoContainer = styled.div`
  cursor: pointer;
  margin: 0 0 0 1.25rem;

  svg {
    width: 40%;
    height: auto;
  }
`;
LogoContainer.displayName = "LogoContainer";

export const MenuContainer = styled.div`
  button {
    all: unset;

    ${({ theme }) => theme.fonts.main.big};

    :first-child {
      margin: 0 1.75rem 0 0;
    }

    font-weight: bold;
    margin: 0 1.75rem;
    cursor: pointer;
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
`;
SearchIcon.displayName = "SearchIcon";
