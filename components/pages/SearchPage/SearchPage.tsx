import { Container, FiltersStyle, Header } from "./styles";

import { ReactElement } from "react";

interface ISearchPageProps {}

export default function SearchPage({}: ISearchPageProps): ReactElement {
  return (
    <Container>
      <Header>
        <span>Search results: 0</span>
        <FiltersStyle />
      </Header>
    </Container>
  );
}
