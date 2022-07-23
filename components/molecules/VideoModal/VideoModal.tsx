import {
  CloseBtn,
  Container,
  Frame,
  LeftBtn,
  Overlay,
  RightBtn,
  VideoContainer,
} from "./styles";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import ClientPortal from "components/atoms/ClientPortal";
import { GrClose } from "react-icons/gr";
import { IVideo } from "types/api/videos";
import { Links } from "utils";

interface IVideoModalProps {
  modalOpen: { open: boolean; initialIndex: number };
  setModalOpen: Dispatch<
    SetStateAction<{ open: boolean; initialIndex: number }>
  >;
  videos?: IVideo;
}

export default function VideoModal({
  modalOpen,
  setModalOpen,
  videos,
}: IVideoModalProps): ReactElement {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    setVideoIndex(modalOpen.initialIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen.open]);

  if (!modalOpen.open || !videos) return <></>;

  return (
    <ClientPortal selector="#modalPortal">
      <Overlay />
      <Container>
        <LeftBtn
          variant="transparentLeft"
          onClick={() => {
            setVideoIndex((prev) =>
              prev > 0 ? prev - 1 : videos.results.length - 1
            );
          }}
        />
        <VideoContainer>
          <Frame
            src={`${Links.youtubeVideoURL}${videos.results[videoIndex].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; rel=0; showinfo=0; autohide=1; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          />
        </VideoContainer>
        <RightBtn
          variant="transparentRight"
          onClick={() => {
            setVideoIndex((prev) =>
              prev < videos.results.length - 1 ? prev + 1 : 0
            );
          }}
        />
        <CloseBtn
          onClick={() => setModalOpen((prev) => ({ ...prev, open: false }))}
        >
          <GrClose />
        </CloseBtn>
      </Container>
    </ClientPortal>
  );
}
