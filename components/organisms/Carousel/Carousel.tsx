import {
  CarouselReview,
  Container,
  Frame,
  ImageContainer,
  NextBtn,
  PrevBtn,
  ProgBar,
  StepsContainer,
  StepsStyle,
} from "./styles";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";

import { AnimationControls } from "framer-motion";
import CarouselImage from "components/organisms/Carousel/CarouselImage";
import Clips from "./Clips";
import GlobalContext from "context/GlobalContext";
import { IDiscoverMovie } from "../../../types/api/discover";
import { IVideo } from "types/api/videos";
import MovieInfo from "./MovieInfo";
import ProgressiveBar from "./ProgressiveBar";
import dynamic from "next/dynamic";

const VideoModal = dynamic(() => import("./VideoModal"), { ssr: false });

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  videos?: IVideo;
  localImages?: boolean;
  disableAutoSlide?: boolean;
  autoSlideDuration?: number;
  page: number;
  direction: number;
  handlePageDirectionChange: (direction: 1 | -1) => void;
  handlePageChange: (toPage: number) => void;
  textAnimControls?: AnimationControls;
}

export default function Carousel({
  carouselData = [],
  videos,
  localImages = false,
  disableAutoSlide = false,
  autoSlideDuration = 15,
  page,
  direction,
  handlePageDirectionChange,
  handlePageChange,
  textAnimControls,
}: ICarouselProps): ReactElement {
  const { routes } = useContext(GlobalContext);

  // Carousel Slide
  const [isTimerPaused, setTimerConfig] = useState(false);

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

  const pauseAutoSlide = () => setTimerConfig(true),
    resumeAutoSlide = () => setTimerConfig(false);

  function onClipClicked(_videoIndex: number) {
    setModalOpen({ open: true, initialIndex: _videoIndex });
  }

  return (
    <>
      <Container ref={imageRef}>
        <Frame>
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
            onClick={() => handlePageDirectionChange(-1)}
          />
          <ImageContainer
            onClick={() => routes?.goToDetails(carouselData[page].id)}
          >
            <CarouselImage
              direction={direction}
              imageURL={carouselData[page].backdrop_path}
              currentPage={page}
              local={localImages}
              handlePageChange={handlePageDirectionChange}
            />

            <MovieInfo
              title={carouselData[page]?.title}
              desc={carouselData[page]?.overview}
              releaseDate={carouselData[page]?.release_date}
              animationControls={textAnimControls}
            />
          </ImageContainer>
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
          <NextBtn
            dataTestId="CarouselNextBtn"
            variant="right"
            strokeWidth={3}
            onClick={() => handlePageDirectionChange(1)}
          />
          <ProgBar>
            <ProgressiveBar
              duration={autoSlideDuration}
              trigger={() => {
                !disableAutoSlide && handlePageDirectionChange(1);
              }}
              pause={isTimerPaused || modalOpen.open}
            />
          </ProgBar>
        </Frame>
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
