import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import HomePage from "components/pages/HomePage";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import axios from "axios";
import clipsRequests from "components/organisms/Carousel/requests";

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
  // Videos & Clips
  const [videos, setVideos] = useState<IVideo>();

  // Context
  const { axiosInstance } = useContext(GlobalContext);

  function getMovieData(step: number) {
    if (carouselData.length > 0 && axiosInstance?.api) {
      clipsRequests(axiosInstance.api)
        .getMovieData(carouselData[step].id)
        .then((data) => {
          console.log(data.data);
          setVideos(data.data);
        });
    }
  }

  function onStepChange(step: number) {
    console.log(`step ${step} in callback`);
    getMovieData(step);
  }

  return (
    <HomePage
      carouselData={carouselData}
      videos={videos}
      onStepChange={onStepChange}
    />
  );
};

export default Index;
