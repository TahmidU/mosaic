import { Container, FiltersStyle, Header } from "./styles";

import { ReactElement } from "react";

interface ISearchPageProps {
  searchData: any;
}

export default function SearchPage({
  searchData,
}: ISearchPageProps): ReactElement {
  console.log(searchData);

  return (
    <Container>
      <Header>
        <span>Search Results Found: {searchData.total_results}</span>
        <FiltersStyle />
      </Header>
    </Container>
  );
}
