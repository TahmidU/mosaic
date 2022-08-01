import { Container, FilterWrapper } from "./styles";
import { ReactElement, useState } from "react";

import Checkbox from "components/atoms/Checkbox";
import useFilters from "./useFilters";

interface IFiltersProps {}

export default function Filters({}: IFiltersProps): ReactElement {
  const { filters, setType } = useFilters();

  return (
    <Container>
      <span>Type:</span>
      <FilterWrapper>
        <Checkbox
          isSelected={filters.type === "movies"}
          onClick={() => setType("movies")}
        >
          <span>Movies</span>
        </Checkbox>
      </FilterWrapper>
      <FilterWrapper>
        <Checkbox
          isSelected={filters.type === "tv"}
          onClick={() => setType("tv")}
        >
          <span>TV</span>
        </Checkbox>
      </FilterWrapper>
    </Container>
  );
}
