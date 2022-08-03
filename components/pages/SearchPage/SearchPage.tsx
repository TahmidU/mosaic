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
import { ReactElement } from "react";
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

  return (
    <Container>
      <Header>
        <span>Search Results Found: {searchData.total_results}</span>
        <FiltersStyle />
      </Header>
      <ResultsContainer>
        {searchData.results.map((_result, index) => {
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
        })}
      </ResultsContainer>
      <Footer>FooterTest</Footer>
    </Container>
  );
}
