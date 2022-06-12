import { IDiscoverMovie } from "types/api/discover";

export const FakeDiscoverMovie: IDiscoverMovie[] = [
  {
    adult: false,
    backdrop_path: "TestResources/testImage.webp",
    genre_ids: [0, 1],
    id: 1,
    original_language: "English",
    original_title: "Test Movie",
    overview: "Test Overview.",
    popularity: 100,
    poster_path: "./TestResources/testImage.webp",
    release_date: "2012-01-01",
    title: "Test Movie",
    video: false,
    vote_average: 10,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path:
      "../../organisms/MobileCarousel/TestResources/testImage.webp",
    genre_ids: [0, 1],
    id: 1,
    original_language: "English",
    original_title: "Test Movie",
    overview: "Test Overview.",
    popularity: 100,
    poster_path: "../../organisms/MobileCarousel/TestResources/testImage.webp",
    release_date: "2012-01-01",
    title: "Test Movie",
    video: false,
    vote_average: 10,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path:
      "../../organisms/MobileCarousel/TestResources/testImage.webp",
    genre_ids: [0, 1],
    id: 1,
    original_language: "English",
    original_title:
      "Very Long Title Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie",
    overview:
      "Very Long Overview Test Overview Test Overview Test Overview Test Overview Test Overview Test Overview Test Overview Test Overview Test Overview.",
    popularity: 100,
    poster_path: "../../organisms/MobileCarousel/TestResources/testImage.webp",
    release_date: "2012-01-01",
    title:
      "Very Long Title Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie Test Movie",
    video: false,
    vote_average: 10,
    vote_count: 10,
  },
];
