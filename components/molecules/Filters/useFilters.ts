import { IFilter, SearchType } from "types/search";
import { useEffect, useState } from "react";

import { filterQuery } from "utils/RoutingUtils";
import { useRouter } from "next/router";

export default function useFilters() {
  const router = useRouter();
  const [filters, setFilters] = useState<IFilter>({
    type: getQueryFromURL("type")
      ? (getQueryFromURL("type") as SearchType)
      : "movies",
  });

  useEffect(() => {
    router.replace({
      pathname: router.pathname,
      query: filterQuery(
        {
          ...router.query,
          ...filters,
        },
        router.query
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  function getQueryFromURL(query: string) {
    return router.query[query];
  }

  function setType(type: SearchType) {
    setFilters((prev) => ({ ...prev, type: type }));
  }

  return { filters, setType };
}
