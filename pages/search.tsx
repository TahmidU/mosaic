import { GetServerSideProps } from "next";
import { SearchType } from "types/search";
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
  console.log(url);

  const searchResults = await axios({
    method: "get",
    headers: { "Content-type": "application/json" },
    url: url,
  });
  const searchData = searchResults.data;
  console.log(searchData);

  return {
    props: {
      searchData,
    },
  };
};

export { default } from "components/pages/SearchPage";
