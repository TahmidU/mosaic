import { IFilter, SearchType } from "types/search";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function useFilters() {
  const router = useRouter();
  const [filters, setFilters] = useState<IFilter>({
    type: getQueryFromURL("type")
      ? (getQueryFromURL("type") as SearchType)
      : "movie",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      type: getQueryFromURL("type") as SearchType,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  function getQueryFromURL(query: string) {
    return router.query[query];
  }

  function setType(type: SearchType) {
    router.replace({
      pathname: "/search",
      query: {
        ...router.query,
        type: type,
        page: 1,
      },
    });
  }

  return { filters, setType };
}
