import { CheckboxStyle, Container, FilterWrapper } from "./styles";

import { ReactElement } from "react";
import { SearchType } from "types/search";

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
          testId="MovieCheckbox"
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
          testId="TVCheckbox"
        >
          <span>TV</span>
        </CheckboxStyle>
      </FilterWrapper>
    </Container>
  );
}
