import { cleanup, fireEvent, render, screen } from "utils/test-config";

import DetailsCard from "./DetailsCard";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import React from "react";
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
        mediaType="movie"
        details={fakeTVData as IMovieDetails & ITVDetails}
      />
    );

    screen.getByText(expectedTitle);
  });

  test("Release date, genres, runtime, and language", () => {});

  test("Additional details movie", () => {});

  test("Additional details TV", () => {});

  test("Providers movie", () => {});

  test("Providers TV", () => {});
});
