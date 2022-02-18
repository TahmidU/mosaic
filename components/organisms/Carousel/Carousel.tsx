import { CarouselContainer, Container, ImageStyle, TextStyle } from "./styles";

import { ReactElement } from "react";
import SlideButton from "./SlideButton";

export default function Carousel(): ReactElement {
  return (
    <Container>
      <SlideButton variant="left" />
      <CarouselContainer>
        <ImageStyle src="/../../../public/logo/logo.png" layout="fill" />
        <TextStyle>
          <p>Title</p>
          <p>
            Description, Excepteur velit in proident eu cillum qui reprehenderit
            dolor est.
          </p>
        </TextStyle>
      </CarouselContainer>
      <SlideButton variant="right" />
    </Container>
  );
}
