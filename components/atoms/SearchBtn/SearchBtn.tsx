import { Container, SearchIcon, SearchInput } from "./styles";

import { ReactElement } from "react";

interface ISearchBtn {}

export default function SearchBtn({}: ISearchBtn): ReactElement {
  return (
    <Container>
      <SearchIcon />
      <SearchInput />
    </Container>
  );
}
