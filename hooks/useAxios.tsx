import axios from "axios";
import { useMemo } from "react";

export default function useAuth() {
  const api = useMemo(
    () =>
      axios.create({
        baseURL: `api/`,
      }),
    []
  );

  return {
    api,
  };
}
