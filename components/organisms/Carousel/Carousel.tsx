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
import { ReactElement, useContext, useEffect, useState } from "react";

import CarouselImage from "./CarouselImage";
import CarouselRequests from "./request";
import GlobalContext from "../../../context/GlobalContext";
import { IDiscoverMovie } from "../../../types/api/discover";
import ProgressiveBar from "./ProgressiveBar";

export default function Carousel(): ReactElement {
  const [step, setStep] = useState(0);
  const [carouselTimerPause, setCarouselTimerPause] = useState(false);
  const [carouselTimerReset, setCarouselTimerReset] = useState(false);
  const [carouselData, setCarouselData] = useState<IDiscoverMovie[]>([]);
  const { axiosInstance } = useContext(GlobalContext);

  useEffect(() => {
    const requests = CarouselRequests(axiosInstance.api);

    requests.getDiscoverMovie().then((data) => {
      setCarouselData(data.results.slice(0, 10));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setResetToFalse() {
    setCarouselTimerReset(false);
  }

  function handleSlideChange(next: boolean, clicked: boolean = false) {
    if (clicked) {
      setCarouselTimerReset(true);
    }

    if (next) {
      setStep((_step) => (_step < 9 ? _step + 1 : 0));
    } else {
      setStep((_step) => (_step < 1 ? _step : _step - 1));
    }
  }

  return (
    <Container>
      <CarouselMainContainer>
        <PrevBtn
          variant="left"
          strokeWidth={3}
          onClick={() => {
            handleSlideChange(false, true);
          }}
        />
        <CarouselContainer>
          <ImageContainer>
            {carouselData.map((movies, index) => {
              return (
                <CarouselImage
                  key={index}
                  imageURL={movies.backdrop_path}
                  currentStep={step}
                  index={index}
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
          strokeWidth={3}
          onClick={() => {
            handleSlideChange(true, true);
          }}
        />
        <ProgBar>
          <ProgressiveBar
            duration={15}
            trigger={() => {
              //! Uncomment this once carousel is finished. It's annoying when debugging!
              //handleSlideChange(true);
            }}
            pause={carouselTimerPause}
            reset={carouselTimerReset}
            setResetToFalse={setResetToFalse}
          />
        </ProgBar>
      </CarouselMainContainer>
    </Container>
  );
}
