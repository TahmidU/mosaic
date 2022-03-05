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
import { TextUtils } from "resources/utils";

export default function Carousel(): ReactElement {
  const [step, setStep] = useState(0);
  const [timerConfig, setTimerConfig] = useState({
    pause: false,
    reset: false,
  });
  const [carouselData, setCarouselData] = useState<IDiscoverMovie[]>([]);
  const { axiosInstance } = useContext(GlobalContext);

  useEffect(() => {
    const requests = CarouselRequests(axiosInstance.api);

    requests.getDiscoverMovie().then((data) => {
      setCarouselData(data.results.slice(0, 10));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onAnimEnd() {
    setTimerConfig((prev) => ({ ...prev, reset: false }));
  }

  function handleSlideChange(next: boolean, clicked: boolean = false) {
    if (clicked) {
      setTimerConfig((prev) => ({ ...prev, reset: true }));
    }

    if (next) {
      setStep((_step) => (_step < 9 ? _step + 1 : 0));
    } else {
      setStep((_step) => (_step < 1 ? 9 : _step - 1));
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
              {carouselData[step]
                ? TextUtils.dateFormatter(carouselData[step].release_date)
                : ""}
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
            pause={timerConfig.pause}
            reset={timerConfig.reset}
            onAnimEnd={onAnimEnd}
          />
        </ProgBar>
      </CarouselMainContainer>
      <div>Test</div>
    </Container>
  );
}
