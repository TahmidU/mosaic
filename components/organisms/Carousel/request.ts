import { AxiosInstance } from "axios";

export default function CarouselRequests(APIInstance: AxiosInstance) {
  function getDiscoverMovie() {
    return APIInstance.get("/discover").then((data) => data.data);
  }

  return {
    getDiscoverMovie,
  };
}
