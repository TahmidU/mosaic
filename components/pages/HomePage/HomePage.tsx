import { ReactElement, useContext, useEffect } from "react";

import Carousel from "components/organisms/Carousel";
import { Container } from "./styles";
import GlobalContext from "context/GlobalContext";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import useHomePageRequests from "./useHomePageRequests";
import { useMediaQuery } from "react-responsive";

interface HomePageProps {
  carouselData: IDiscoverMovie[];
  videos?: IVideo;
  onStepChange?: (step: number) => void;
}

export default function HomePage({
  carouselData,
  videos,
  onStepChange,
}: HomePageProps): ReactElement {
  const { getMoviesInTheatres } = useHomePageRequests();

  useEffect(() => {}, []);

  const isSmallTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <Container>
      {isSmallTablet ? (
        <></>
      ) : (
        <Carousel
          carouselData={carouselData}
          videos={videos}
          onStepChange={onStepChange}
          disableAutoSlide
        />
      )}
    </Container>
  );
}
