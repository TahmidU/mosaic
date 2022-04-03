import { ReactElement, useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import GlobalContext from "context/GlobalContext";
import { IVideo } from "types/api/videos";
import clipsRequests from "./requests";

interface ClipsProps {
  currentMovieId: number;
}

export default function Clips({ currentMovieId }: ClipsProps): ReactElement {
  const [videos, setVideos] = useState<IVideo>();
  const [loading, setLoading] = useState<boolean>(false);
  const { axiosInstance } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
  }, [currentMovieId]);

  useEffect(() => {
    if (loading && axiosInstance?.api) {
      clipsRequests(axiosInstance.api)
        .getMovieData(currentMovieId)
        .then((data) => {
          setLoading(false);
          console.log(data);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, axiosInstance]);

  return (
    <Container>
      <div>
        <span>Trailers {"&"} Clips</span>
        <span>Result: {""}</span>
      </div>
      <div></div>
    </Container>
  );
}
