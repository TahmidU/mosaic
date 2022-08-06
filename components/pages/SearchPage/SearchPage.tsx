import {
  Container,
  FiltersStyle,
  Footer,
  Header,
  LinkBtn,
  MovieSearchResult,
  ResultsContainer,
} from "./styles";
import { SearchResult, SearchType } from "types/search";

import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import usePagination from "hooks/usePagination";
import useRoutes from "hooks/useRoutes";

const Pagination = dynamic(() => import("components/atoms/Pagination"), {
  ssr: false,
});

interface ISearchPageProps {
  searchData: SearchResult;
  type: SearchType;
}

export default function SearchPage({
  searchData,
  type,
}: ISearchPageProps): ReactElement {
  const { generateDetailsURL } = useRoutes();
  const { getInitialPage, onPageChange, page } = usePagination();

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

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
            page={page}
            total={totalPages}
            color="red"
            radius="lg"
            size={isMobile ? "sm" : undefined}
            onChange={(page) => onPageChange(page)}
          />
        )}
      </Footer>
    </Container>
  );
}
