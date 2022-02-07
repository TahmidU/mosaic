import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80px;
  height: auto;

  div:first-child {
    display: inline-flex;
    align-items: center;
  }
`;
NavbarContainer.displayName = "NavbarContainer";

export const LogoContainer = styled.div`
  cursor: pointer;
  margin: 0 0rem 0 1.25rem;

  svg {
    width: 70%;
    height: auto;
  }
`;
LogoContainer.displayName = "LogoContainer";

export const MenuContainer = styled.div`
  button {
    all: unset;

    ${({ theme }) => theme.fonts.main.bigger};

    :first-child {
      margin: 0 2rem 0 0;
    }

    font-weight: bold;
    margin: 0 2rem;
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
