import { AnimationControls, useAnimation } from "framer-motion";
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

import CarouselImage from "components/organisms/Carousel/CarouselImage";
import Clips from "./Clips";
import { IDiscoverMovie } from "../../../types/api/discover";
import { IVideo } from "types/api/videos";
import MovieInfo from "./MovieInfo";
import ProgressiveBar from "./ProgressiveBar";
import dynamic from "next/dynamic";
import { textAnimVariant } from "./animation-variants";

const VideoModal = dynamic(() => import("./VideoModal"), { ssr: false });

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  videos?: IVideo;
  localImages?: boolean;
  disableAutoSlide?: boolean;
  autoSlideDuration?: number;
  startPage?: number;
  autoSlideCallback?: () => void;
  onPageChange?: (step: number) => void;
  page: number;
  direction: number;
  handlePageDirectionChange: (direction: 1 | -1) => void;
  handlePageChange: (toPage: number) => void;
  animationControls?: AnimationControls;
}

export default function Carousel({
  carouselData = [],
  videos,
  localImages = false,
  disableAutoSlide = false,
  autoSlideDuration = 15,
  startPage = 0,
  autoSlideCallback = () => {},
  onPageChange,
  page,
  direction,
  handlePageDirectionChange,
  handlePageChange,
  animationControls,
}: ICarouselProps): ReactElement {
  // Carousel Slide
  const [timerConfig, setTimerConfig] = useState({
    pause: false,
    reset: false,
  });

  // Carousel Image
  const imageRef = useRef<HTMLDivElement>(null);

  // Modal
  const [modalOpen, setModalOpen] = useState({
    open: false,
    initialIndex: 0,
  });

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

  function changeSlide(direction: 1 | -1, clicked: boolean = false) {
    if (clicked) {
      resetCarouselTimer();
    } else {
      autoSlideCallback();
    }

    handlePageDirectionChange(direction);
  }

  return (
    <>
      <Container ref={imageRef}>
        <CarouselMainContainer>
          <CarouselReview
            percentage={
              carouselData.length > 0
                ? Math.round(carouselData[page].vote_average * 10)
                : 0
            }
          />
          <PrevBtn
            dataTestId="CarouselPrevBtn"
            variant="left"
            strokeWidth={3}
            onClick={() => changeSlide(-1, true)}
          />
          <CarouselContainer>
            <ImageContainer>
              <CarouselImage
                direction={direction}
                imageURL={carouselData[page].backdrop_path}
                currentPage={page}
                local={localImages}
                handlePageChange={changeSlide}
              />

              <StepsContainer>
                {carouselData.map((_, index) => {
                  return (
                    <StepsStyle
                      key={index}
                      enabled={index <= page}
                      onClick={() => handlePageChange(index)}
                    />
                  );
                })}
              </StepsContainer>
            </ImageContainer>
            <MovieInfo
              title={carouselData[page]?.title}
              desc={carouselData[page]?.overview}
              releaseDate={carouselData[page]?.release_date}
              animationControls={animationControls}
            />
          </CarouselContainer>
          <NextBtn
            dataTestId="CarouselNextBtn"
            variant="right"
            strokeWidth={3}
            onClick={() => changeSlide(1, true)}
          />
          <ProgBar>
            <ProgressiveBar
              duration={autoSlideDuration}
              trigger={() => {
                //! Uncomment this once carousel is finished. It's annoying when debugging!
                !disableAutoSlide && changeSlide(1);
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
