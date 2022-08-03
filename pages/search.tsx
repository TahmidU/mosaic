import { SearchMovie, SearchTV, SearchType } from "types/search";

import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let extracted: string[] = [];

  const page = context.query.page as string | undefined;
  const query = context.query.query as string | undefined;

  if (page) {
    extracted.push(`page=${page}`);
  }

  if (query) {
    extracted.push(`query=${query}`);
  }

  const type: SearchType | undefined = context.query.type as
    | SearchType
    | undefined;

  if (!type) return { props: {} };

  const url = `${process.env.MOVIE_DB_WEB_URL}/search/${type}?language=en-US&include_adult=false&api_key=${process.env.MOVIE_DB_API_KEY}`.concat(
    `&${extracted.join("&")}`
  );

  const searchResults = await axios({
    method: "get",
    headers: { "Content-type": "application/json" },
    url: url,
  });

  return {
    props: {
      searchData: searchResults.data,
      type,
    },
  };
};

export { default } from "components/pages/SearchPage";
