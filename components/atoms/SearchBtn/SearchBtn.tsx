import { Container, SearchIcon, SearchInput } from "./styles";
import { ReactElement, useState } from "react";

import { searchContainerAnimVariant } from "./animation-variants";

interface ISearchBtn {}

export default function SearchBtn({}: ISearchBtn): ReactElement {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container
      onClick={() => setOpen((prev) => !prev)}
      variants={searchContainerAnimVariant}
      animate={isOpen ? "open" : "close"}
      show={isOpen}
      transition={{ type: "just" }}
    >
      <div>
        <SearchInput show={isOpen} />
      </div>
      <SearchIcon />
    </Container>
  );
}
