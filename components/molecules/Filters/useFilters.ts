import { IFilter, SearchType } from "types/search";

import { useState } from "react";

export default function useFilters() {
  const [filters, setFilters] = useState<IFilter>({
    type: undefined,
  });

  function setType(type: SearchType) {
    setFilters((prev) => ({ ...prev, type: type }));
  }

  return { filters, setType };
}
