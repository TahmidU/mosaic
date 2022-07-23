import axios from "axios";
import { useMemo } from "react";

export default function useAuth() {
  const api = useMemo(
    () =>
      axios.create({
        baseURL: `/api/`,
      }),
    []
  );

  const getVideoData = async (
    movieId: number,
    type: "movies" | "tv" = "movies"
  ) => {
    return await api
      .get(`/${type}/${movieId}/videos`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return {
    api,
    getVideoData,
  };
}
