import { filterQuery } from "utils/RoutingUtils";
import { useRouter } from "next/router";

export default function usePagination() {
  const router = useRouter();

  function getInitialPage(): number {
    const pageQuery = Number(router.query["page"] as string);
    return pageQuery;
  }

  function onPageChange(page: number) {
    router.replace({
      pathname: "/search",
      query: filterQuery({ ...router.query, page: page }, router.query),
    });
  }

  return { getInitialPage, onPageChange };
}
