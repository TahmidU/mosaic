import axios from "axios";
import { useMemo } from "react";

export default function useAuth() {
  const api = useMemo(
    () =>
      axios.create({
        baseURL: `https://api.themoviedb.org/3`,
        params: {
          api_key: process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY,
        },
      }),
    []
  );

  console.log(process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY);

  return {
    api,
  };
}
