import { AxiosInstance } from "axios";

export default function CarouselRequests(APIInstance: AxiosInstance) {
  function getDiscoverMovie() {
    return APIInstance.get(
      `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  function foo() {
    return APIInstance.get("/discover").then((data) => console.log(data));
  }

  return {
    getDiscoverMovie,
    foo,
  };
}
