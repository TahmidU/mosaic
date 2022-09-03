import {
  Container,
  HeroSection,
  MovieListStyle,
  ScrollDownContainer,
} from "./styles";
import useExploreList, { ExploreMovies, ExploreTVs } from "./useExploreList";

import Carousel from "components/organisms/Carousel";
import { Element } from "react-scroll";
import { IDiscoverMovie } from "types/api/discover";
import { ReactElement } from "react";
import ScrollDownBtn from "components/molecules/ScrollDownBtn";

interface IHomePageProps {
  carouselData: IDiscoverMovie[];
}

export default function HomePage({
  carouselData,
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
        <Carousel carouselData={carouselData} />

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
          movies={exploreMoviesList.list}
          loading={exploreMoviesList.loading}
        />

        <MovieListStyle
          title="Explore TV Shows"
          subListTitles={[ExploreTVs.ON_AIR, ExploreTVs.POPULAR]}
          onSubTitleClick={(subTitle: ExploreTVs) => exploreTVSelect(subTitle)}
          movies={exploreTVsList.list}
          loading={exploreTVsList.loading}
          type="tv"
        />
      </Element>
    </Container>
  );
}
