import { Container, Frame, Overlay } from "./styles";

import { ReactElement } from "react";

interface VideoModalProps {}

export default function VideoModal({}: VideoModalProps): ReactElement {
  return (
    <>
      <Overlay />
      <Container>
        <Frame
          src="https://www.youtube-nocookie.com/embed/JfVOs4VSpmA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; rel=0; showinfo=0; autohide=1; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
        />
      </Container>
    </>
  );
}
