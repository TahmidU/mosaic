import { MathUtils, TextUtils } from "utils";
import { cleanup, fireEvent, render, screen } from "utils/test-config";

import DetailsCard from "./DetailsCard";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import React from "react";
import { fakeMovieData } from "resources/TestResources/MovieDetails";
import { fakeTVData } from "resources/TestResources/TVDetails";
import { findInCrewNamesByJob, numberWithCommas } from "utils/TextUtils";

afterEach(cleanup);

describe("DetailsCard", () => {
  test("Title movie", () => {
    const expectedTitle = fakeMovieData.original_title;

    render(
      <DetailsCard
        mediaType="movie"
        details={fakeMovieData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedTitle);
  });

  test("Title TV", () => {
    const expectedTitle = fakeTVData.original_name;

    render(
      <DetailsCard
        mediaType="tv"
        details={fakeTVData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedTitle);
  });

  test("Release date movie", () => {
    const date = fakeMovieData.release_date;
    const expectedDate = TextUtils.dateFormatter(date) as string;

    render(
      <DetailsCard
        mediaType="movie"
        details={fakeMovieData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedDate, { exact: false, selector: "span" });
  });

  test("Release date TV", () => {
    const date = fakeTVData.first_air_date;
    const expectedDate = TextUtils.dateFormatter(date) as string;

    render(
      <DetailsCard
        mediaType="tv"
        details={fakeTVData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedDate, { exact: false, selector: "span" });
  });

  test("Genres, runtime, and language", () => {
    const expectedGenres = fakeMovieData.genres
      .map((_genre) => _genre.name)
      .join(", ");
    const expectedRuntime = MathUtils.shortenRuntime(fakeMovieData.runtime);
    const expectedLanguage = fakeMovieData.original_language;

    render(
      <DetailsCard
        mediaType="movie"
        details={fakeMovieData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedGenres, { exact: false, selector: "span" });
    screen.getByText(`${expectedRuntime}`, { exact: false, selector: "span" });
    screen.getByText(expectedLanguage, { exact: true, selector: "span" });
  });

  test("Additional details movie", () => {
    const expectedDirectors = findInCrewNamesByJob(
      fakeMovieData?.credits?.crew,
      "Director"
    ) as string;
    const expectedWriters = findInCrewNamesByJob(
      fakeMovieData?.credits?.crew,
      "Writer"
    ) as string;
    const expectedBudget = `$${numberWithCommas(fakeMovieData.budget)}`;
    const expectedRevenue = `$${numberWithCommas(fakeMovieData.revenue)}`;

    render(
      <DetailsCard
        mediaType="movie"
        details={fakeMovieData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedDirectors);
    screen.getByText(expectedWriters);
    screen.getByText(expectedBudget);
    screen.getByText(expectedRevenue);
  });

  test("Additional details TV", () => {
    const expectedType = fakeTVData.type;
    const expectedNumberOfSeasons = fakeTVData.number_of_seasons;
    const expectedNumberOfEpisodes = fakeTVData.number_of_episodes;

    render(
      <DetailsCard
        mediaType="tv"
        details={fakeTVData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedType);
    screen.getByText(expectedNumberOfSeasons);
    screen.getByText(expectedNumberOfEpisodes);
  });

  test("Providers movie", () => {});

  test("Providers TV", () => {});
});
