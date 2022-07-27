import { Container, SearchIcon, SearchInput } from "./styles";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { searchContainerAnimVariant } from "./animation-variants";
import useOuterClick from "hooks/useOuterClick";

interface ISearchBtn {}

export default function SearchBtn({}: ISearchBtn): ReactElement {
  const [isOpen, setOpen] = useState(false);

  const { reference: containerRef } = useOuterClick(setOpen);

  return (
    <Container
      onClick={() => setOpen(true)}
      variants={searchContainerAnimVariant}
      animate={isOpen ? "open" : "close"}
      show={isOpen}
      transition={{ type: "just" }}
      ref={containerRef}
    >
      <div>
        <SearchInput show={isOpen} />
      </div>
      <SearchIcon />
    </Container>
  );
}
