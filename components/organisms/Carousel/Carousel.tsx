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
import CarouselImage from "./CarouselImage";

export default function Carousel(): ReactElement {
  const [step, setStep] = useState(0);
  const [carouselData, setCarouselData] = useState<IDiscoverMovie[]>([]);
  const { axiosInstance } = useContext(GlobalContext);

  useEffect(() => {
    const requests = CarouselRequests(axiosInstance.api);

    requests.getDiscoverMovie().then((data) => {
      setCarouselData(data.results);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(`${step} ${carouselData.length}`);

  function handleSlideChange(next: boolean) {
    if (next) {
      setStep((_step) => (_step < carouselData.length - 1 ? _step + 1 : _step));
    } else {
      setStep((_step) => (_step < 1 ? _step : _step - 1));
    }
  }

  return (
    <Container>
      <CarouselMainContainer>
        <PrevBtn
          variant="left"
          strokeWidth={4}
          onClick={() => {
            handleSlideChange(false);
          }}
        />
        <CarouselContainer>
          <ImageContainer>
            {carouselData.map((movies, index) => {
              return (
                <CarouselImage
                  key={index}
                  imageURL={movies.backdrop_path}
                  hide={step !== index}
                />
              );
            })}
          </ImageContainer>
          <TextStyle>
            <p>{carouselData[step] ? carouselData[step].title : ""}</p>
            <p>{carouselData[step] ? carouselData[step].overview : ""}</p>
            <p>
              RELEASE DATE:{" "}
              {carouselData[step] ? carouselData[step].release_date : ""}
            </p>
          </TextStyle>
        </CarouselContainer>
        <NextBtn
          variant="right"
          strokeWidth={4}
          onClick={() => {
            handleSlideChange(true);
          }}
        />
        <ProgBar>
          <ProgressiveBar
            duration={15}
            trigger={() => {
              handleSlideChange(true);
            }}
          />
        </ProgBar>
      </CarouselMainContainer>
    </Container>
  );
}
