import { CheckboxStyle, Container, FilterWrapper } from "./styles";
import { IFilter, SearchType } from "types/search";

import { ReactElement } from "react";

interface ITypeFilterProps {
  className?: string;
  setType: (type: SearchType) => void;
  selected: SearchType;
}

export default function TypeFilter({
  className,
  setType,
  selected,
}: ITypeFilterProps): ReactElement {
  return (
    <Container {...{ className }}>
      <span>Type:</span>
      <FilterWrapper>
        <CheckboxStyle
          isSelected={selected === "movie"}
          onClick={() => setType("movie")}
        >
          <span>Movies</span>
        </CheckboxStyle>
      </FilterWrapper>
      <FilterWrapper>
        <CheckboxStyle
          isSelected={selected === "tv"}
          onClick={() => setType("tv")}
        >
          <span>TV</span>
        </CheckboxStyle>
      </FilterWrapper>
    </Container>
  );
}
