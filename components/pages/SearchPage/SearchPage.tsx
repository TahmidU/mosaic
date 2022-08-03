import {
  Container,
  FiltersStyle,
  Footer,
  Header,
  LinkBtn,
  MovieSearchResult,
  ResultsContainer,
} from "./styles";
import { SearchMovie, SearchResult, SearchTV, SearchType } from "types/search";

import MovieSearchCard from "components/molecules/MovieSearchCard";
import { Pagination } from "@mantine/core";
import { ReactElement } from "react";
import usePagination from "hooks/usePagination";
import useRoutes from "hooks/useRoutes";

interface ISearchPageProps {
  searchData: SearchResult;
  type: SearchType;
}

export default function SearchPage({
  searchData,
  type,
}: ISearchPageProps): ReactElement {
  const { generateDetailsURL } = useRoutes();
  const { getInitialPage, onPageChange } = usePagination();

  let totalResults = searchData ? searchData.total_results : 0;
  let totalPages = searchData ? searchData.total_pages : 0;

  return (
    <Container>
      <Header>
        <span>Search Results Found: {totalResults}</span>
        <FiltersStyle />
      </Header>
      <ResultsContainer>
        {searchData ? (
          searchData.results.map((_result, index) => {
            return (
              <LinkBtn key={index} href={generateDetailsURL(_result.id, type)}>
                <MovieSearchResult
                  title={_result.name || _result.title}
                  src={_result.poster_path}
                  desc={_result.overview}
                  releaseDate={_result.release_date || _result.first_air_date}
                  rating={_result.vote_average}
                />
              </LinkBtn>
            );
          })
        ) : (
          <p>No search results...</p>
        )}
      </ResultsContainer>
      <Footer>
        {searchData && (
          <Pagination
            initialPage={getInitialPage()}
            total={totalPages}
            color="red"
            radius="lg"
            withEdges
            onChange={(page) => onPageChange(page)}
          />
        )}
      </Footer>
    </Container>
  );
}
