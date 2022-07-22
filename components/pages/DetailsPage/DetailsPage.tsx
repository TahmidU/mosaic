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
  const [videoData, setVideoData] = useState<IVideoResult[]>();
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
          setVideoData(data.results);
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const details = movieDetails ? movieDetails : tvDetails;

  if (!details) return <></>;

  return (
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
            videoData.map((_video, index) => (
              <MediaListWrapper key={index}>
                <MediaCardStyle
                  title={_video.name}
                  src={`${Links.youtubeThumbnailURL}${_video.key}/hqdefault.jpg`}
                />
              </MediaListWrapper>
            ))}
        </MediaHorizontalList>
      </ExtraDetailSection>
    </Container>
  );
}
