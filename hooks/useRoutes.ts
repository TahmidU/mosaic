import { IUseRoutes } from "types/context";
import { MediaType } from "types/tv_movies";
import { useRouter } from "next/router";

export default function useRoutes(): IUseRoutes {
  const router = useRouter();

  const goToHomePage = () => router.replace(`/`),
    goToDetails = (id: number, type: MediaType = "movie") =>
      router.replace(`/${type}/${id}`),
    goToSearchPage = (search: string) => router.replace(`/search?q=${search}`);

  return {
    goToHomePage,
    goToDetails,
    goToSearchPage,
  };
}
