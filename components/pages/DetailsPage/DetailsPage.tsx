import {
  CastCardStyle,
  CastHorizontalList,
  CastListWrapper,
  Container,
  ExtraDetailSection,
  MediaCardStyle,
  MediaHorizontalList,
  MediaListWrapper,
  ShortDetailSection,
} from "./styles";
import { IVideo, IVideoResult } from "types/api/videos";
import { ReactElement, useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { Links } from "utils";
import MovieDetails from "components/organisms/MovieDetails";
import VideoModal from "components/organisms/Carousel/VideoModal";
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
  const [videoData, setVideoData] = useState<IVideo>();
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
        .then((data: IVideo) => {
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
          <MovieDetails movieDetails={movieDetails} tvDetails={tvDetails} />
        </ShortDetailSection>
        <ExtraDetailSection>
          <div>
            <p>Description</p>
            <p>{details.overview}</p>
          </div>

          <CastHorizontalList title="Cast">
            {details.credits?.cast.map((_actor, index) => (
              <CastListWrapper key={index}>
                <CastCardStyle person={_actor} />
              </CastListWrapper>
            ))}
          </CastHorizontalList>

          <MediaHorizontalList title="Media">
            {videoData &&
              videoData.results.map((_video, index) => (
                <MediaListWrapper key={index}>
                  <MediaCardStyle
                    title={_video.name}
                    src={`${Links.youtubeThumbnailURL}${_video.key}/hqdefault.jpg`}
                    onClick={() =>
                      setModal({ open: true, initialIndex: index })
                    }
                  />
                </MediaListWrapper>
              ))}
          </MediaHorizontalList>
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
