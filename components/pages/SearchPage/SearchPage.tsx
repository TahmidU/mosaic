import {
  Container,
  FiltersStyle,
  Footer,
  Header,
  ResultsContainer,
} from "./styles";
import { SearchMovie, SearchResult, SearchTV, SearchType } from "types/search";

import MovieSearchCard from "components/molecules/MovieSearchCard";
import { ReactElement } from "react";

interface ISearchPageProps {
  searchData: SearchResult;
  type: SearchType;
}

export default function SearchPage({
  searchData,
  type,
}: ISearchPageProps): ReactElement {
  return (
    <Container>
      <Header>
        <span>Search Results Found: {searchData.total_results}</span>
        <FiltersStyle />
      </Header>
      <ResultsContainer>
        {searchData.results.map((_result, index) => {
          return (
            <MovieSearchCard
              key={index}
              title={_result.name || _result.title || "test"}
              src={_result.poster_path}
              desc={_result.overview}
            />
          );
        })}
      </ResultsContainer>
      <Footer>FooterTest</Footer>
    </Container>
  );
}
