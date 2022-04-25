import {
  CloseBtn,
  Container,
  Frame,
  LeftBtn,
  Overlay,
  RightBtn,
  VideoContainer,
} from "./styles";

import { GrClose } from "react-icons/gr";
import { ReactElement } from "react";
import SlideButton from "../SlideButton";

interface VideoModalProps {}

export default function VideoModal({}: VideoModalProps): ReactElement {
  return (
    <>
      <Overlay />
      <Container>
        <LeftBtn variant="mobileLeft" />
        <VideoContainer>
          <Frame
            src="https://www.youtube-nocookie.com/embed/JfVOs4VSpmA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; rel=0; showinfo=0; autohide=1; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          />
        </VideoContainer>
        <RightBtn variant="mobileRight" />
        <CloseBtn>
          <GrClose />
        </CloseBtn>
      </Container>
    </>
  );
}
