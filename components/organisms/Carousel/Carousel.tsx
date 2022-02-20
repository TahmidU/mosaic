import {
  CarouselContainer,
  CarouselMainContainer,
  ImageStyle,
  LinearGradient,
  NextBtn,
  PrevBtn,
  ProgBar,
  TextStyle,
} from "./styles";

import { ReactElement, useState, useEffect, useContext } from "react";
import ProgressiveBar from "./ProgressiveBar";
import GlobalContext from "../../../context/GlobalContext";
import CarouselRequests from "./request";

export default function Carousel(): ReactElement {
  const [loading, setLoading] = useState(true);
  const { axiosInstance } = useContext(GlobalContext);

  useEffect(() => {
    const requests = CarouselRequests(axiosInstance.api);
    requests && requests?.getDiscoverMovie();
  }, []);

  return (
    <CarouselMainContainer>
      <PrevBtn variant="left" strokeWidth={4} />
      <CarouselContainer>
        {!loading && <LinearGradient />}
        <ImageStyle
          src="https://image.tmdb.org/t/p/original/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
          blurDataURL="https://image.tmdb.org/t/p/w300/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
          placeholder="blur"
          width={1280}
          height={720}
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
          <p>RELEASE DATE: DD/MM/YYYY</p>
        </TextStyle>
      </CarouselContainer>
      <NextBtn variant="right" strokeWidth={4} />
      <ProgBar>
        <ProgressiveBar duration={15} />
      </ProgBar>
    </CarouselMainContainer>
  );
}
