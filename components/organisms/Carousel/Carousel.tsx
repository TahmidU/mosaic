import {
  CarouselContainer,
  CarouselMainContainer,
  Container,
  ImageStyle,
  LinearGradient,
  NextBtn,
  PrevBtn,
  ProgBar,
  TextStyle,
} from "./styles";
import Image from "next/image";
import { ReactElement, useState, useEffect, useContext } from "react";
import ProgressiveBar from "./ProgressiveBar";
import GlobalContext from "../../../context/GlobalContext";
import CarouselRequests from "./request";
import { IDiscoverMovie } from "../../../types/api/discover";

export default function Carousel(): ReactElement {
  const [loading, setLoading] = useState(true);
  const [carouselData, setCarouselData] = useState<IDiscoverMovie[]>([]);
  const { axiosInstance } = useContext(GlobalContext);

  useEffect(() => {
    const requests = CarouselRequests(axiosInstance.api);

    requests.getDiscoverMovie().then((data) => {
      setCarouselData(data.results);
    });

    //requests && requests?.getDiscoverMovie();
    //requests && requests?.foo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(carouselData);

  return (
    <Container>
      <CarouselMainContainer>
        <PrevBtn variant="left" strokeWidth={4} />
        <CarouselContainer>
          {!loading && <LinearGradient />}
          <ImageStyle>
            <Image
              alt="Carousel"
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
          </ImageStyle>

          <TextStyle>
            <p>Title</p>
            <p>
              Description, Excepteur velit in proident eu cillum qui
              reprehenderit dolor est.
            </p>
            <p>RELEASE DATE: DD/MM/YYYY</p>
          </TextStyle>
        </CarouselContainer>
        <NextBtn variant="right" strokeWidth={4} />
        <ProgBar>
          <ProgressiveBar duration={15} />
        </ProgBar>
      </CarouselMainContainer>
    </Container>
  );
}
