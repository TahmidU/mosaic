import { Container, FiltersStyle } from "./styles";

import { ReactElement } from "react";

interface ISearchPageProps {}

export default function SearchPage({}: ISearchPageProps): ReactElement {
  return (
    <Container>
      <FiltersStyle />
    </Container>
  );
}
