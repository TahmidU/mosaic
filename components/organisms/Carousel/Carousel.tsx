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
import { MathUtils, TextUtils } from "utils";
import { ReactElement, useEffect, useRef, useState } from "react";

import CarouselImage from "./CarouselImage";
import Clips from "./Clips";
import { IDiscoverMovie } from "../../../types/api/discover";
import { IVideo } from "types/api/videos";
import ProgressiveBar from "./ProgressiveBar";
import dynamic from "next/dynamic";
import { textAnimVariant } from "./animation-variants";
import { useAnimation } from "framer-motion";

const VideoModal = dynamic(() => import("./VideoModal"), { ssr: false });

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  videos?: IVideo;
  localImages?: boolean;
  disableAutoSlide?: boolean;
  autoSlideDuration?: number;
  startStep?: number;
  autoSlideCallback?: () => void;
  onStepChange?: (step: number) => void;
}

export default function Carousel({
  carouselData = [],
  videos,
  localImages = false,
  disableAutoSlide = false,
  autoSlideDuration = 15,
  startStep = 0,
  autoSlideCallback = () => {},
  onStepChange,
}: ICarouselProps): ReactElement {
  // Carousel Slide
  const [[step, direction], setStep] = useState([startStep, 0]);
  const [timerConfig, setTimerConfig] = useState({
    pause: false,
    reset: false,
  });
  const textAnimControls = useAnimation();

  // Carousel Image
  const imageRef = useRef<HTMLDivElement>(null);

  // Modal
  const [modalOpen, setModalOpen] = useState({
    open: false,
    initialIndex: 0,
  });

  // Animations
  useEffect(() => {
    textAnimControls.set(textAnimVariant.hide);
    textAnimControls.start(() => textAnimVariant.show);

    onStepChange && onStepChange(step);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    function addEventListeners() {
      if (image) {
        image.addEventListener("mouseover", pauseAutoSlide);
        image.addEventListener("mouseleave", resumeAutoSlide);
      }
    }

    function removeEventListeners() {
      if (image) {
        image.removeEventListener("mouseover", pauseAutoSlide);
        image.removeEventListener("mouseleave", resumeAutoSlide);
      }
    }

    const image = imageRef.current;
    addEventListeners();

    return () => {
      removeEventListeners();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageRef.current]);

  console.log(modalOpen);

  function pauseAutoSlide() {
    setTimerConfig((prev) => ({ ...prev, pause: true }));
  }

  function resumeAutoSlide() {
    setTimerConfig((prev) => ({ ...prev, pause: false }));
  }

  function onTimerAnimEnd() {
    setTimerConfig((prev) => ({ ...prev, reset: false }));
  }

  function resetCarouselTimer() {
    setTimerConfig((prev) => ({ ...prev, reset: true }));
  }

  function onClipClicked(_videoIndex: number) {
    setModalOpen({ open: true, initialIndex: _videoIndex });
  }

  function handleSlideChange(direction: 1 | -1, clicked: boolean = false) {
    if (clicked) {
      resetCarouselTimer();
    } else {
      autoSlideCallback();
    }

    setStep(([_step, _direction]) => [
      MathUtils.mod(_step + direction, carouselData.length),
      direction,
    ]);
  }

  return (
    <>
      <Container ref={imageRef}>
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
              handleSlideChange(-1, true);
            }}
          />
          <CarouselContainer>
            <ImageContainer>
              <CarouselImage
                direction={direction}
                imageURL={carouselData[step].backdrop_path}
                currentStep={step}
                local={localImages}
                handleSlideChange={handleSlideChange}
              />

              <StepsContainer>
                {carouselData.map((_, index) => {
                  return (
                    <StepsStyle
                      key={index}
                      enabled={index <= step}
                      onClick={() => {
                        if (index - step < 0) {
                          setStep([index, -1]);
                        } else if (index - step > 0) {
                          setStep([index, 1]);
                        }
                        resetCarouselTimer();
                      }}
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
              handleSlideChange(1, true);
            }}
          />
          <ProgBar>
            <ProgressiveBar
              duration={autoSlideDuration}
              trigger={() => {
                //! Uncomment this once carousel is finished. It's annoying when debugging!
                !disableAutoSlide && handleSlideChange(1);
              }}
              pause={timerConfig.pause || modalOpen.open}
              reset={timerConfig.reset}
              onAnimEnd={onTimerAnimEnd}
            />
          </ProgBar>
        </CarouselMainContainer>
        <Clips
          videos={videos}
          onClipClickedCallback={(_videoIndex: number) => {
            onClipClicked(_videoIndex);
          }}
        />
      </Container>
      <VideoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        videos={videos}
      />
    </>
  );
}
