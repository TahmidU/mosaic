import {
  Container,
  ExtraDetailSection,
  MovieDetailsStyle,
  ShortDetailSection,
} from "./styles";
import { ReactElement, useContext, useEffect, useState } from "react";

import CastList from "components/organisms/CastList";
import GlobalContext from "context/GlobalContext";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { IVideos } from "types/api/videos";
import MediaList from "components/organisms/MediaList";
import VideoModal from "components/molecules/VideoModal";
import { useRouter } from "next/router";

interface IDetailsPageProps {
  movieDetails?: IMovieDetails;
  tvDetails?: ITVDetails;
}

export default function DetailsPage({
  movieDetails,
  tvDetails,
}: IDetailsPageProps): ReactElement {
  const { globalRequests } = useContext(GlobalContext);
  const [videoData, setVideoData] = useState<IVideos>();
  const [modal, setModal] = useState({
    open: false,
    initialIndex: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    id &&
      globalRequests
        ?.getVideoData(
          Number(id),
          router.route === "/movie/[id]" ? "movies" : "tv"
        )
        .then((data: IVideos) => {
          setVideoData(data);
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const details = movieDetails ? movieDetails : tvDetails;

  if (!details) return <></>;

  return (
    <>
      <Container>
        <ShortDetailSection>
          <MovieDetailsStyle
            movieDetails={movieDetails}
            tvDetails={tvDetails}
          />
        </ShortDetailSection>
        <ExtraDetailSection>
          <div>
            <p>Description</p>
            <p>{details.overview}</p>
          </div>

          <CastList movieDetails={details} />

          <MediaList {...{ setModal, videoData }} />
        </ExtraDetailSection>
      </Container>
      <VideoModal
        modalOpen={modal}
        setModalOpen={setModal}
        videos={videoData}
      />
    </>
  );
}
