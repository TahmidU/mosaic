import MovieSearchCard from "components/molecules/MovieSearchCard";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Pagination } from "@mantine/core";

const Filters = dynamic(() => import("components/molecules/Filters"), {
  ssr: false,
});

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

export const FiltersStyle = styled(Filters)``;
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

export const PaginationStyle = styled(Pagination)``;
PaginationStyle.displayName = "PaginationStyle";
