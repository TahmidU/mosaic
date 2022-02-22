import axios from "axios";
import { useMemo } from "react";

export default function useAuth() {
  const api = useMemo(
    () =>
      axios.create({
        baseURL: `/api`,
      }),
    []
  );

  //console.log(process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY);
  /**
   *         params: {
          api_key: "",
        },
   */

  return {
    api,
  };
}
