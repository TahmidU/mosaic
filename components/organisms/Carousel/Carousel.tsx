import {
  CarouselContainer,
  CarouselMainContainer,
  CarouselReview,
  Container,
  ImageContainer,
  NextBtn,
  PrevBtn,
  ProgBar,
  StepsContainer,
  StepsStyle,
  TextStyle,
} from "./styles";
import { ReactElement, useEffect, useState } from "react";

import CarouselImage from "./CarouselImage";
import Clips from "./Clips";
import { IDiscoverMovie } from "../../../types/api/discover";
import ProgressiveBar from "./ProgressiveBar";
import { TextUtils } from "resources/utils";
import { textAnimVariant } from "./animation-variants";
import { useAnimation } from "framer-motion";

interface CarouselProps {
  carouselData?: IDiscoverMovie[];
  localImages?: boolean;
  disableAutoSlide?: boolean;
  autoSlideDuration?: number;
  startStep?: number;
  autoSlideCallback?: () => void;
}

export default function Carousel({
  carouselData = [],
  localImages = false,
  disableAutoSlide = false,
  autoSlideDuration = 15,
  startStep = 0,
  autoSlideCallback = () => {},
}: CarouselProps): ReactElement {
  const [step, setStep] = useState(startStep);
  const [timerConfig, setTimerConfig] = useState({
    pause: false,
    reset: false,
  });
  const textAnimControls = useAnimation();

  useEffect(() => {
    textAnimControls.set(textAnimVariant.hide);
    textAnimControls.start(() => textAnimVariant.show);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function onTimerAnimEnd() {
    setTimerConfig((prev) => ({ ...prev, reset: false }));
  }

  function handleSlideChange(next: boolean, clicked: boolean = false) {
    if (clicked) {
      setTimerConfig((prev) => ({ ...prev, reset: true }));
    } else {
      autoSlideCallback();
    }

    if (next) {
      setStep((_step) => (_step < carouselData.length - 1 ? _step + 1 : 0));
    } else {
      setStep((_step) => (_step < 1 ? carouselData.length - 1 : _step - 1));
    }
  }

  return (
    <Container>
      <CarouselMainContainer>
        <CarouselReview
          percentage={
            carouselData.length > 0
              ? Math.round(carouselData[step].vote_average * 10)
              : 0
          }
        />
        <PrevBtn
          dataTestId="CarouselPrevBtn"
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
                  local={localImages}
                />
              );
            })}

            <StepsContainer>
              {carouselData.map((movies, index) => {
                return (
                  <StepsStyle
                    key={index}
                    enabled={index <= step}
                    onClick={() => setStep(index)}
                  />
                );
              })}
            </StepsContainer>
          </ImageContainer>
          <TextStyle variants={textAnimVariant} animate={textAnimControls}>
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
          dataTestId="CarouselNextBtn"
          variant="right"
          strokeWidth={3}
          onClick={() => {
            handleSlideChange(true, true);
          }}
        />
        <ProgBar>
          <ProgressiveBar
            duration={autoSlideDuration}
            trigger={() => {
              //! Uncomment this once carousel is finished. It's annoying when debugging!
              !disableAutoSlide && handleSlideChange(true);
            }}
            pause={timerConfig.pause}
            reset={timerConfig.reset}
            onAnimEnd={onTimerAnimEnd}
          />
        </ProgBar>
      </CarouselMainContainer>
      <div>
        <Clips currentMovieId={634649} />
      </div>
    </Container>
  );
}
