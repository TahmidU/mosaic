import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import HomePage from "components/pages/HomePage";
import { IDiscoverMovie } from "types/api/discover";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const carouselResults = await axios({
    method: "get",
    headers: { "Content-type": "application/json" },
    url: `${process.env.MOVIE_DB_WEB_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=${process.env.MOVIE_DB_API_KEY}`,
  });
  const carouselData: IDiscoverMovie[] = carouselResults.data.results.slice(
    0,
    10
  );

  return {
    props: { carouselData },
  };
};

const Index: NextPage = ({
  carouselData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <HomePage carouselData={carouselData} />;
};

export default Index;
