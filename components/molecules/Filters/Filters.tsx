import { Container } from "./styles";
import { ReactElement } from "react";
import TypeFilter from "./TypeFilter";
import useFilters from "./useFilters";

interface IFiltersProps {
  className?: string;
}

export default function Filters({ className }: IFiltersProps): ReactElement {
  const { filters, setType } = useFilters();
  return (
    <Container {...{ className }}>
      <TypeFilter selected={filters.type} setType={setType} />
    </Container>
  );
}
