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
import { createPortal } from "react-dom";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function VideoModal({
  open,
  onClose,
  onNext,
  onPrev,
}: VideoModalProps): ReactElement {
  if (!open) return <></>;

  return (
    <ClientPortal selector="#modalPortal">
      <Overlay onClick={onClose} />
      <Container>
        <LeftBtn variant="mobileLeft" onClick={onPrev} />
        <VideoContainer>
          <Frame
            src="https://www.youtube-nocookie.com/embed/JfVOs4VSpmA"
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
