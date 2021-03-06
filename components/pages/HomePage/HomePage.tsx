import {
  Container,
  HeroSection,
  MovieListStyle,
  ScrollDownContainer,
} from "./styles";
import useExploreList, { ExploreMovies, ExploreTVs } from "./useExploreList";

import { Element } from "react-scroll";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import { ReactElement } from "react";
import ScrollDownBtn from "components/molecules/ScrollDownBtn";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("components/organisms/Carousel"), {
  ssr: false,
});

interface IHomePageProps {
  carouselData: IDiscoverMovie[];
  videos?: IVideo;
  onPageChange?: (step: number) => void;
}

export default function HomePage({
  carouselData,
  videos,
  onPageChange,
}: IHomePageProps): ReactElement {
  const {
    exploreMoviesList,
    exploreMovieSelect,
    exploreTVSelect,
    exploreTVsList,
  } = useExploreList();

  return (
    <Container>
      <HeroSection>
        <Carousel
          carouselData={carouselData}
          videos={videos}
          onPageChange={onPageChange}
        />

        <ScrollDownContainer>
          <ScrollDownBtn to="ContentSection" />
        </ScrollDownContainer>
      </HeroSection>

      <Element name="ContentSection">
        <MovieListStyle
          title="Explore Movies"
          subListTitles={[
            ExploreMovies.IN_THEATRES,
            ExploreMovies.POPULAR,
            ExploreMovies.UPCOMING,
          ]}
          onSubTitleClick={(subTitle: ExploreMovies) =>
            exploreMovieSelect(subTitle)
          }
          movies={exploreMoviesList}
        />

        <MovieListStyle
          title="Explore TV Shows"
          subListTitles={[ExploreTVs.ON_AIR, ExploreTVs.POPULAR]}
          onSubTitleClick={(subTitle: ExploreTVs) => exploreTVSelect(subTitle)}
          movies={exploreTVsList}
          type="tv"
        />
      </Element>
    </Container>
  );
}
