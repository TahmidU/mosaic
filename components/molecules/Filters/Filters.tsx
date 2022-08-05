import { Container, FilterWrapper } from "./styles";
import { ReactElement, useState } from "react";

import Checkbox from "components/atoms/Checkbox";
import useFilters from "./useFilters";

interface IFiltersProps {
  className?: string;
}

export default function Filters({ className }: IFiltersProps): ReactElement {
  const { filters, setType } = useFilters();
  return (
    <Container {...{ className }}>
      <span>Type:</span>
      <FilterWrapper>
        <Checkbox
          isSelected={filters.type === "movie"}
          onClick={() => setType("movie")}
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
