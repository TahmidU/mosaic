import { CarouselContainer, Container, ImageStyle, TextStyle } from "./styles";

import { ImageLoader } from "next/image";
import { ReactElement } from "react";
import SlideButton from "./SlideButton";

export default function Carousel(): ReactElement {
  function myLoader({ src, width }: { src: string; width: number }) {
    console.log(width);
    return `https://image.tmdb.org/t/p/w${width}${src}`;
  }

  return (
    <Container>
      <SlideButton variant="left" />
      <CarouselContainer>
        <ImageStyle
          loader={myLoader}
          src="/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
          width={1280}
          height={720}
          layout="responsive"
        />
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
