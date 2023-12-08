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

import { GrClose } from "react-icons/gr";
import { IVideos } from "types/api/videos";
import { Links } from "utils";

interface IVideoModalProps {
  modalOpen: { open: boolean; initialIndex: number };
  setModalOpen: Dispatch<
    SetStateAction<{ open: boolean; initialIndex: number }>
  >;
  videos?: IVideos;
  testId?: string;
}

export default function VideoModal({
  modalOpen,
  setModalOpen,
  videos,
  testId = "VideoModal",
}: IVideoModalProps): ReactElement {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    setVideoIndex(modalOpen.initialIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen.open]);

  if (!modalOpen.open || !videos) return <></>;

  const closeModal = () => setModalOpen((prev) => ({ ...prev, open: false }));
  const prevVideo = () => {
    setVideoIndex((prev) => (prev > 0 ? prev - 1 : videos.results.length - 1));
  };
  const nextVideo = () => {
    setVideoIndex((prev) => (prev < videos.results.length - 1 ? prev + 1 : 0));
  };

  return (
    <div data-testid={testId}>
      <Overlay />
      <Container>
        <LeftBtn
          testId={`${testId}-PrevBtn`}
          variant="transparentLeft"
          onClick={prevVideo}
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
          testId={`${testId}-NextBtn`}
          variant="transparentRight"
          onClick={nextVideo}
        />
        <CloseBtn data-testid={`${testId}-CloseBtn`} onClick={closeModal}>
          <GrClose />
        </CloseBtn>
      </Container>
    </div>
  );
}
