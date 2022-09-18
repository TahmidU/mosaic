import { cleanup, fireEvent, render, screen } from "utils/test-config";

import DetailsCard from "./DetailsCard";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import React from "react";
import { TextUtils } from "utils";
import { fakeMovieData } from "resources/TestResources/MovieDetails";
import { fakeTVData } from "resources/TestResources/TVDetails";

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

  test("Genres, runtime, and language", () => {});

  test("Additional details movie", () => {});

  test("Additional details TV", () => {});

  test("Providers movie", () => {});

  test("Providers TV", () => {});
});
