import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IFilter, SearchType } from "types/search";

import { useRouter } from "next/router";
import useRoutes from "hooks/useRoutes";

interface IMobileFilter {
  selected: IFilter;
  applied: IFilter;
}

export default function useSearch(
  searchText: string,
  isMenuOpen: boolean,
  setMenuOpen: Dispatch<SetStateAction<boolean>>
) {
  const router = useRouter();
  const { goToSearchPage } = useRoutes();

  const [filters, setFilters] = useState<IMobileFilter>({
    selected: {
      type: getQueryFromURL("type")
        ? (getQueryFromURL("type") as SearchType)
        : "movie",
    },
    applied: {
      type: getQueryFromURL("type")
        ? (getQueryFromURL("type") as SearchType)
        : "movie",
    },
  });

  useEffect(() => {
    if (isMenuOpen) {
      setFilters((prev) => {
        const newValue = {
          ...prev,
          type: getQueryFromURL("type") as SearchType,
        };

        return {
          selected: newValue,
          applied: newValue,
        };
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);

  function getQueryFromURL(query: string) {
    return router.query[query];
  }

  function onHandleMenuKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setMenuOpen(false),
        goToSearchPage(searchText, filters.selected.type),
        setFilters((prev) => ({ ...prev, applied: prev.selected }));
    }
  }

  function onHandleMenuClickSearch() {
    setMenuOpen(false),
      goToSearchPage(searchText, filters.selected.type),
      setFilters((prev) => ({ ...prev, applied: prev.selected }));
  }

  function setType(type: SearchType) {
    setFilters((prev) => ({ ...prev, selected: { type: type } }));
  }

  function cancelFilters() {
    setFilters((prev) => ({ ...prev, selected: prev.applied }));
  }

  return {
    onHandleMenuKeyDown,
    onHandleMenuClickSearch,
    setType,
    filters: filters.selected,
    cancelFilters,
  };
}
