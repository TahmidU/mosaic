import {
  CarouselContainer,
  CarouselMainContainer,
  Container,
  ImageContainer,
  NextBtn,
  PrevBtn,
  ProgBar,
  TextStyle,
} from "./styles";

import { ReactElement, useState, useEffect, useContext } from "react";
import ProgressiveBar from "./ProgressiveBar";
import GlobalContext from "../../../context/GlobalContext";
import CarouselRequests from "./request";
import { IDiscoverMovie } from "../../../types/api/discover";

export default function Carousel(): ReactElement {
  //const [loading, setLoading] = useState(true);
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
          <ImageContainer></ImageContainer>
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
