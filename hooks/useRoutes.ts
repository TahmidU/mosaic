import { MediaType } from "types/tv_movies";
import { filterQuery } from "utils/RoutingUtils";
import { useRouter } from "next/router";

export default function useRoutes() {
  const router = useRouter();

  const generateDetailsURL = (id: number, type: MediaType = "movie") =>
    `/${type}/${id}`;

  const goToHomePage = () => {
      router.replace(`/`);
    },
    goToDetails = (id: number, type: MediaType = "movie") => {
      router.replace(generateDetailsURL(id, type));
    },
    goToSearchPage = (search?: string) =>
      router.replace({
        pathname: "/search",
        query: filterQuery(
          { query: search, page: 1, type: "movie" },
          router.query
        ),
      });

  return {
    goToHomePage,
    goToDetails,
    generateDetailsURL,
    goToSearchPage,
  };
}
