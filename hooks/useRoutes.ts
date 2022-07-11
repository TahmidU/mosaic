import { IUseRoutes } from "types/context";
import { useRouter } from "next/router";

export default function useRoutes(): IUseRoutes {
  const router = useRouter();

  const goToHomePage = () => router.replace(`/`),
    goToDetails = (id: number, type: "movie" | "tv" = "movie") =>
      router.replace(`/${type}/${id}`),
    goToSearchPage = (search: string) => router.replace(`/search?q=${search}`);

  return {
    goToHomePage,
    goToDetails,
    goToSearchPage,
  };
}
