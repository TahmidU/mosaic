import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";
import styled from "styled-components";

const SearchBtnSkeleton = styled(Skeleton)`
  width: 285px;
  height: 40px;
  margin-right: 2rem;

  @media only screen and (max-width: 768px) {
    width: 25px;
  }
`;

const SearchInput = dynamic(() => import("components/organisms/SearchInput"), {
  ssr: false,
  loading: () => <SearchBtnSkeleton />,
});

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80px;
  height: auto;

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: unset;
    align-items: center;
    width: 100%;

    > svg {
      width: 165px;
      height: auto;
      margin: 0 3rem 0 1.25rem;
      cursor: pointer;
    }
  }
`;
NavbarContainer.displayName = "NavbarContainer";

export const MenuContainer = styled.div`
  button {
    all: unset;

    ${({ theme }) => theme.fonts.main.big};

    :first-child {
      margin: 0 1.75rem 0 0;
    }

    font-weight: 500;
    margin: 0 1.75rem;
    cursor: pointer;
  }
`;
MenuContainer.displayName = "MenuContainer";

export const SearchInputStyle = styled(SearchInput)`
  margin-right: 2rem;
`;
SearchInputStyle.displayName = "SearchInputStyle";
