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
import { ReactElement, useContext, useState } from "react";

import { AnimationControls } from "framer-motion";
import CarouselImage from "components/organisms/Carousel/CarouselImage";
import Clips from "./Clips";
import GlobalContext from "context/GlobalContext";
import { IDiscoverMovie } from "../../../types/api/discover";
import { IVideos } from "types/api/videos";
import MovieInfo from "./MovieInfo";
import ProgressiveBar from "./ProgressiveBar";
import dynamic from "next/dynamic";
import useCarouselAnimations from "./useCarouselAnimations";

const ClientPortal = dynamic(() => import("components/atoms/ClientPortal"), {
  ssr: false,
});
const VideoModal = dynamic(() => import("../../molecules/VideoModal"), {
  ssr: false,
});

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  videos?: IVideos;
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
  disableAutoSlide = false,
  autoSlideDuration = 15,
  page,
  direction,
  handlePageDirectionChange,
  handlePageChange,
  textAnimControls,
}: ICarouselProps): ReactElement {
  const { routes } = useContext(GlobalContext);
  const { isTimerPaused, imageRef } = useCarouselAnimations();
  const [modalOpen, setModalOpen] = useState({
    open: false,
    initialIndex: 0,
  });

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
            testId="CarouselPrevBtn"
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
            testId="CarouselNextBtn"
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

      <ClientPortal selector="#modalPortal">
        <VideoModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          videos={videos}
        />
      </ClientPortal>
    </>
  );
}
