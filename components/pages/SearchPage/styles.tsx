import Filters from "components/molecules/Filters";
import MovieSearchCard from "components/molecules/MovieSearchCard";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem 1.5rem;
  position: relative;
`;
Container.displayName = "Container";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: unset;
  }

  > span:first-child {
    ${({ theme }) => theme.fonts.main.medium};
  }
`;
Header.displayName = "Header";

export const FiltersStyle = styled(Filters)`
  width: fit-content;

  @media only screen and (max-width: 768px) {
    margin: 0 0 1rem 0;
    > span:first-child {
      margin: 0;
    }
  }
`;
FiltersStyle.displayName = "FiltersStyle";

export const ResultsContainer = styled.div`
  height: 100%;
  margin: 1rem 0;

  > a > div {
    margin: 1rem 0;
  }
`;
ResultsContainer.displayName = "ResultsContainer";

export const LinkBtn = styled.a`
  width: fit-content;
  height: fit-content;
`;
LinkBtn.displayName = "LinkBtn";

export const MovieSearchResult = styled(MovieSearchCard)`
  :hover {
    background-color: ${({ theme }) => theme.cGrey.alpha(0.2).toString()};
  }
`;
MovieSearchResult.displayName = "MovieSearchResult";

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
Footer.displayName = "Footer";
