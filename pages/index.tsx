import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import HomePage from "components/pages/HomePage";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import axios from "axios";
import useVideoInfoCache from "hooks/useVideoInfoCache";

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

  const getVideoDataPromises = carouselData.map(
    async (_movie) =>
      await axios({
        method: "get",
        headers: { "Content-type": "application/json" },
        url: `${process.env.MOVIE_DB_WEB_URL}/movie/${_movie.id}/videos?api_key=${process.env.MOVIE_DB_API_KEY}`,
      }).then((res) => {
        return res.data;
      })
  );
  const allMovieVideoData: IVideo[] = await Promise.all(getVideoDataPromises);

  return {
    props: { carouselData, allMovieVideoData },
  };
};

const Index: NextPage = ({
  carouselData,
  allMovieVideoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { currVideos, onPageChange } = useVideoInfoCache(allMovieVideoData);

  return (
    <HomePage
      carouselData={carouselData}
      videos={currVideos}
      onPageChange={onPageChange}
    />
  );
};

export default Index;
