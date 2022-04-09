import Carousel from "components/organisms/Carousel";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import { ReactElement } from "react";
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
  const isSmallTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div>
      {isSmallTablet ? (
        <></>
      ) : (
        <Carousel
          carouselData={carouselData}
          videos={videos}
          onStepChange={onStepChange}
        />
      )}
    </div>
  );
}
