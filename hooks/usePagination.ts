import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function usePagination() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const page = getQueryFromURL("page") as string;

    if (page) {
      setPage(Number(page));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  function getQueryFromURL(query: string) {
    return router.query[query];
  }

  function getInitialPage(): number {
    const pageQuery = Number(router.query["page"] as string);
    return pageQuery;
  }

  function pushToURL(page: number) {
    router.replace({
      pathname: "/search",
      query: { ...router.query, page: page },
    });
  }

  function onPageChange(page: number) {
    pushToURL(page);
  }

  return { getInitialPage, onPageChange, page };
}
