import {
  Container,
  DetailsCardStyle,
  ExtraDetailSection,
  ShortDetailSection,
} from "./styles";
import { ReactElement, useContext, useEffect, useState } from "react";

import CastList from "components/organisms/CastList";
import GlobalContext from "context/GlobalContext";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { IVideos } from "types/api/videos";
import MediaList from "components/organisms/MediaList";
import { MediaType } from "types/tv_movies";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ClientPortal = dynamic(() => import("components/atoms/ClientPortal"), {
  ssr: false,
});
const VideoModal = dynamic(() => import("components/molecules/VideoModal"), {
  ssr: false,
});
interface IDetailsPageProps {
  details?: IMovieDetails & ITVDetails;
  mediaType: MediaType;
}

export default function DetailsPage({
  details,
  mediaType,
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

  if (!details) return <></>;

  return (
    <>
      <Container>
        <ShortDetailSection>
          <DetailsCardStyle details={details} mediaType={mediaType} />
        </ShortDetailSection>
        <ExtraDetailSection>
          <div>
            <p>Description</p>
            <p>{details.overview}</p>
          </div>

          <CastList details={details} />

          <MediaList {...{ setModal, videoData }} />
        </ExtraDetailSection>
      </Container>
      <ClientPortal selector="#modalPortal">
        <VideoModal
          modalOpen={modal}
          setModalOpen={setModal}
          videos={videoData}
        />
      </ClientPortal>
    </>
  );
}
