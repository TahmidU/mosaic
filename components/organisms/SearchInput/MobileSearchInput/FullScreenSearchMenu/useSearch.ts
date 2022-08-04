import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { IFilter, SearchType } from "types/search";

import { useRouter } from "next/router";
import useRoutes from "hooks/useRoutes";

export default function useSearch(
  searchText: string,
  setMenuOpen: Dispatch<SetStateAction<boolean>>
) {
  const router = useRouter();
  const { goToSearchPage } = useRoutes();

  const [filters, setFilters] = useState<IFilter>({
    type: getQueryFromURL("type")
      ? (getQueryFromURL("type") as SearchType)
      : "movie",
  });

  function getQueryFromURL(query: string) {
    return router.query[query];
  }

  function onHandleMenuKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setMenuOpen(false), goToSearchPage(searchText, filters.type);
    }
  }

  function onHandleMenuClickSearch() {
    setMenuOpen(false), goToSearchPage(searchText, filters.type);
  }

  function setType(type: SearchType) {
    setFilters((prev) => ({ ...prev, type: type }));
  }

  return { onHandleMenuKeyDown, onHandleMenuClickSearch, setType, filters };
}
