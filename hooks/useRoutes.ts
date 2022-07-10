import { IUseRoutes } from "types/context";
import { useRouter } from "next/router";

export default function useRoutes(): IUseRoutes {
  const router = useRouter();

  const goToHomePage = () => router.replace(`/`),
    goToMovieDetails = (movieId: number) => router.replace(`/movie/${movieId}`),
    goToSearchPage = (search: string) => router.replace(`/search?q=${search}`);

  return {
    goToHomePage,
    goToMovieDetails,
    goToSearchPage,
  };
}
