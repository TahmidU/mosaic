import {
  CloseBtn,
  Container,
  Frame,
  LeftBtn,
  Overlay,
  RightBtn,
  VideoContainer,
} from "./styles";

import ClientPortal from "components/atoms/ClientPortal";
import { GrClose } from "react-icons/gr";
import { ReactElement } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  url: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  onNext,
  onPrev,
  url,
}: VideoModalProps): ReactElement {
  if (!isOpen) return <></>;

  return (
    <ClientPortal selector="#modalPortal">
      <Overlay onClick={onClose} />
      <Container>
        <LeftBtn variant="mobileLeft" onClick={onPrev} />
        <VideoContainer>
          <Frame
            src={`https://www.youtube-nocookie.com/embed/${url}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; rel=0; showinfo=0; autohide=1; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          />
        </VideoContainer>
        <RightBtn variant="mobileRight" onClick={onNext} />
        <CloseBtn onClick={onClose}>
          <GrClose />
        </CloseBtn>
      </Container>
    </ClientPortal>
  );
}
