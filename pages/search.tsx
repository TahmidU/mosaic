import { SearchMovie, SearchTV, SearchType } from "types/search";

import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let extracted: string[] = [];

  let page = context.query.page as string | undefined;
  let query = context.query.query as string | undefined;
  let type: SearchType = context.query.type as SearchType;

  if (!query) {
    return {
      props: {},
    };
  }

  if (!type || !page) {
    return {
      redirect: {
        destination: `/search?query=${query}&page=1&type=movie`,
        permanent: true,
      },
    };
  }

  if (query) {
    extracted.push(`query=${query}`);
  }

  if (page) {
    extracted.push(`page=${page}`);
  }

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
