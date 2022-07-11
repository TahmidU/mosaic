import { MediaType } from "types/tv_movies";

export const goToHomePage = () => "/",
  goToDetails = (id: number, type: MediaType = "movie") => `/${type}/${id}`,
  goToSearchPage = (search: string) => `/search?q=${search}`;

const RoutingUtils = { goToDetails };

export default RoutingUtils;
