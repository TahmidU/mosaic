import {
  CarouselContainer,
  Container,
  ImageStyle,
  LinearGradient,
  NextBtn,
  SlideBtn,
  TextStyle,
} from "./styles";

import { ImageLoader } from "next/image";
import { ReactElement, useState } from "react";
import SlideButton from "./SlideButton";

export default function Carousel(): ReactElement {
  function myLoader({ src, width }: { src: string; width: number }) {
    console.log(width);
    return `https://image.tmdb.org/t/p/w${width}${src}`;
  }

  const [loading, setLoading] = useState(true);

  return (
    <Container>
      <SlideBtn variant="left" />
      <CarouselContainer>
        {!loading && <LinearGradient />}
        <ImageStyle
          src="https://image.tmdb.org/t/p/w1280/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
          blurDataURL="https://image.tmdb.org/t/p/w300/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
          placeholder="blur"
          width={1920}
          height={1080}
          layout="responsive"
          onLoadingComplete={() => {
            setLoading(false);
          }}
        />
        <TextStyle>
          <p>Title</p>
          <p>
            Description, Excepteur velit in proident eu cillum qui reprehenderit
            dolor est.
          </p>
        </TextStyle>
      </CarouselContainer>
      <NextBtn variant="right" />
    </Container>
  );
}
