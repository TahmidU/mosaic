import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const movieDetailsResults = await axios({
    method: "get",
    headers: { "Content-type": "application/json" },
    url: `${process.env.MOVIE_DB_WEB_URL}/movie/${id}?language=en-US&append_to_response=external_ids,credits,watch/providers&api_key=${process.env.MOVIE_DB_API_KEY}`,
  });

  return {
    props: {
      details: movieDetailsResults.data,
      mediaType: "movie",
    },
  };
};

export { default } from "components/pages/DetailsPage";
