import { AxiosInstance } from "axios";

export default function clipsRequests(APIInstance: AxiosInstance) {
  function getMovieData(movieId: number) {
    return APIInstance.get(`/video?movieId=${movieId}`);
  }

  return {
    getMovieData,
  };
}
