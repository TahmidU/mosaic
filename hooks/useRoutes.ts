import { MediaType } from "types/tv_movies";
import { SearchType } from "types/search";
import { useRouter } from "next/router";

export default function useRoutes() {
  const router = useRouter();

  console.log(router.query);

  const homePageURL = "/";

  const generateDetailsURL = (id: number, type: MediaType = "movie") =>
    `/${type}/${id}`;

  const goToHomePage = () => {
      router.replace(`/`);
    },
    goToDetails = (id: number, type: MediaType = "movie") => {
      router.replace(generateDetailsURL(id, type));
    },
    goToSearchPage = (search?: string, type: SearchType = "movie") =>
      search &&
      search.length > 0 &&
      router.replace({
        pathname: "/search",
        query: { query: search, page: 1, type: type },
      });

  return {
    homePageURL,
    goToHomePage,
    goToDetails,
    generateDetailsURL,
    goToSearchPage,
  };
}
